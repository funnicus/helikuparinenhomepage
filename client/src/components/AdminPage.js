import React, { useState, useEffect } from 'react'
import loginService from '../services/loginService'
import paintingsService from '../services/paintings'
import paintingService from '../services/painting'
import uploadService from '../services/upload'
import Message from './Message'
import Login from './Login'
import ModifyingPage from './ModifyingPage'
import Gallery from './Gallery'
import './AdminPage.css'
import './Form.css'

/**
 * Sori kun tämä koodi on nii hirveetä spagettia tuleva minä tai jokin muu :D
 */

const AdminPage = () => {
  //muutama tila
    const [password, setPassword] = useState('')
    const [user, setUser] = useState(null)
    const [notification, setNotification] = useState('')
    const [dbCollections, setDbCollections] = useState([])
    const [collection, setCollection] = useState('')
    const [collectionEn, setCollectionEn] = useState('')
    const [desc, setDesc] = useState('')
    const [name, setName] = useState('')
    const [descEn, setDescEn] = useState('')
    const [nameEn, setNameEn] = useState('')
    const [notificationStyle, setNotificationStyle] = useState({})
    const [files, setFiles] = useState('')

    //muutama handleChange
    const handlePassChange = e => setPassword(e.target.value)
    const handleCollectionChange = e => setCollection(e.target.value)
    const handleDescChange = e => setDesc(e.target.value)
    const handleNameChange = e => setName(e.target.value)
    const handleCollectionChangeEn = e => setCollectionEn(e.target.value)
    const handleDescChangeEn = e => setDescEn(e.target.value)
    const handleNameChangeEn = e => setNameEn(e.target.value)

    const handleFileChange = e => {
      console.log(files)
      return setFiles(e.target.files[0])
    }

    const handleOptionClick = e => {
      const foundCollection = dbCollections.find(c => c.name === e.target.value)
      setCollection(e.target.value)
      setCollectionEn(foundCollection.nameEn)
    }

    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('loggedUser')
        if (loggedUserJSON) {
          const user = JSON.parse(loggedUserJSON)
          setUser(user)
          loginService.setToken(user.token) // ehkä turha
          paintingsService.setToken(user.token)
          paintingService.setToken(user.token)
          uploadService.setToken(user.token)
        }
    }, [])

    useEffect(() => {
        const fetchCollections = async () => {
          const receivedCollections = await paintingsService.getAll()
          setDbCollections(receivedCollections)
          console.log(receivedCollections)
        }
        fetchCollections()
      }, [])

      //hardkoodattu kieli notifikaatioita varten
    const lang = 'fi'

    function createMessageTimeout(messageCSS, mFi, mEn) {
        setNotification(lang === 'fi' ? mFi : mEn )
        setNotificationStyle(messageCSS)
        setTimeout(() => {
          setNotification('')
          setNotificationStyle({})
        }, 5000)
    }

    const handleLogin = async (event) => {
        event.preventDefault()
        //vaihda tarvittaessa
        const username = 'admin'
        try {
          const user = await loginService.login({
            username, password,
          })
    
          window.localStorage.setItem(
            'loggedUser', JSON.stringify(user)
          )
    
          loginService.setToken(user.token)
          paintingsService.setToken(user.token)
          paintingService.setToken(user.token)
          uploadService.setToken(user.token)
          setPassword('')
          setUser(user)
          createMessageTimeout({ backgroundColor: 'green', display: 'block' }, 'Kirjauduttu sisään!', 'Logged in!')
        } catch (exception) {
          createMessageTimeout({ backgroundColor: 'red', display: 'block' }, 'Jokin meni pieleen...', 'oof')
        }
      }
    
      const handleLogout = (event) => {
        createMessageTimeout({ backgroundColor: 'green', display: 'block' }, 'Kirjauduttu ulos!', 'Logged out!')
        event.preventDefault()
        window.localStorage.clear()
        setUser(null)
        loginService.setToken(null)
        paintingsService.setToken(null)
        paintingService.setToken(null)
        uploadService.setToken(null)
      }

      //Funktio lisää tilassa olevan kuvan tietokantaan
      //ja sitä kutsutaan addPainting() -funktiossa
      const addImage = async () => {
        console.log(files)
        const formData = new FormData()
        formData.append('file', files)
        const res = await uploadService.create(formData)
        console.log(res)
        return res
      }

      //Funktio lisää tiedot taulusta tietokantaan
      //ja sitä kutsutaan addCollection() -funktiossa
      const addPainting = async (id) => {
        const imageFilename = await addImage()
        const paintingsInDb = await paintingService.getAll()
        const foundPainting = paintingsInDb.find(p => p.name === name)
        if(foundPainting !== undefined){
          createMessageTimeout({ backgroundColor: 'red', display: 'block' }, 'Tämän niminen taulu on jo olemassa!', '...')
          return 0
        }
        const paintingObj = {
          name: name,
          desc: desc,
          nameEn: nameEn,
          descEn: descEn,
          img: imageFilename,
          collectionId: id
        }
        return await paintingService.create(paintingObj)
      }


      const addCollection = async (event) => {
        event.preventDefault()

        if(!collection || !name || !desc || !files) {
          createMessageTimeout({ backgroundColor: 'red', display: 'block' }, 'Taululta puuttuu nimi, kokoelma, tiedot tai kuva...', '...')
          return 0
        }

        const collectionObj = {
          name: collection,
          nameEn: collectionEn
        }
        
        //Katsotaan, josko tietokannasta löytyisi jo kokoelma samalla nimellä
        const foundCollection = dbCollections.find(c => c.name === collection)

        //Jos ei niin luodaan uusi kokoelma ja lisätään taulu siihen
        //muuten lisätään taulu jo olemassa olevaan kokoelmaan
        if(foundCollection === undefined){
          try{
            const savedCollection = await paintingsService.create(collectionObj)
            const addedPainting = await addPainting(savedCollection.id)
            if(addedPainting === 0) return 0
          }
          catch(err){
            console.log(err)
            createMessageTimeout({ backgroundColor: 'red', display: 'block' }, 'Jokin meni pieleen, avaa konsoli.', '...')
            return 0
          }
        }
        else{
          try{
            await addPainting(foundCollection.id)
          }
          catch(err){
            console.log(err)
            createMessageTimeout({ backgroundColor: 'red', display: 'block' }, 'Jokin meni pieleen, avaa konsoli.', '...')
            return 0
          }
        }
        const updatedCollectionsList = await paintingsService.getAll()
        setDbCollections(updatedCollectionsList)
        createMessageTimeout({ backgroundColor: 'green', display: 'block' }, 'Taulu lisätty kokoelmaan!', '...')
        setName('')
        setDesc('')
        setCollection('')
        setNameEn('')
        setDescEn('')
        setCollectionEn('')
        setFiles('')
      }
      
    //luodaan selectori käyttöliittymä, josta voidaan valita jo olemassa olevia kokoelmia
    const collectionsSelector = dbCollections.map((c, i) => <option key={c.id} value={c.name} onClick={handleOptionClick}>{c.name}</option>)

    //propseja on kyllä tässä ihan liikaa XD
    return (
        <div className='AdminPage'>
            {user === null ? 
            <div>
              <Message message={notification} style={notificationStyle} />
              <Login 
              password={password} 
              handlePassChange={handlePassChange} 
              handleLogin={handleLogin} 
              />
            </div> : 
            <div>
              <h1>Tervetuloa ylläpitohommiin!</h1>
              <p>If you are some hacker, pls don't destroy anything ;(</p>
              <button onClick={handleLogout}>Kirjaudu ulos...</button>
              <Message message={notification} style={notificationStyle} />
              <ModifyingPage 
              collection={collection}
              collectionEn={collectionEn}
              handleCollectionChange={handleCollectionChange}
              handleCollectionChangeEn={handleCollectionChangeEn}

              name={name}
              nameEn={nameEn}
              handleNameChange={handleNameChange}
              handleNameChangeEn={handleNameChangeEn}

              desc={desc}
              descEn={descEn}
              handleDescChange={handleDescChange}
              handleDescChangeEn={handleDescChangeEn}

              files={files}
              handleFileChange={handleFileChange}
              addCollection={addCollection}
              collectionsSelector={collectionsSelector}
              />
            </div>}
        </div>
    )
}

export default AdminPage