import React, { useState, useEffect } from 'react'
import loginService from '../services/loginService'
import paintingsService from '../services/paintings'
import paintingService from '../services/painting'
import Message from './Message'
import Login from './Login'
import ModifyingPage from './ModifyingPage'
import Gallery from './Gallery'
import './AdminPage.css'
import './Form.css'

const AdminPage = () => {
    const [password, setPassword] = useState('')
    const [user, setUser] = useState(null)
    const [notification, setNotification] = useState('')
    const [dbCollections, setDbCollections] = useState([]) //kesken
    const [collection, setCollection] = useState('')
    const [desc, setDesc] = useState('')
    const [name, setName] = useState('')
    const [notificationStyle, setNotificationStyle] = useState({})
    const [files, setFiles] = useState([])

    const handlePassChange = e => setPassword(e.target.value)
    const handleCollectionChange = e => setCollection(e.target.value)
    const handleDescChange = e => setDesc(e.target.value)
    const handleNameChange = e => setName(e.target.value)
    const handleFileChange = e => setFiles(Array.from(e.target.files[0]))
    const handleOptionClick = e => setCollection(e.target.value)

    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('loggedUser')
        if (loggedUserJSON) {
          const user = JSON.parse(loggedUserJSON)
          setUser(user)
          loginService.setToken(user.token) // ehkä turha
          paintingsService.setToken(user.token)
          paintingService.setToken(user.token)
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
        const username = 'test'
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
      }

      const addPainting = async (id) => {
        const paintingObj = {
          name: name,
          desc: desc,
          img: 'placeholder',
          collectionId: id
        }
        await paintingService.create(paintingObj)
      }

      const addCollection = async (event) => {
        event.preventDefault()

        const collectionObj = {
          name: collection
        }
        
        const foundCollection = dbCollections.find(c => c.name === collection)

        console.log(foundCollection)
        if( foundCollection === undefined){
          try{
            const savedCollection = await paintingsService.create(collectionObj)
            await addPainting(savedCollection.id)
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
      }
      
      const collectionsSelector = dbCollections.map((c, i) => <option key={c.id} value={c.name} onClick={handleOptionClick}>{c.name}</option>)

      const modifyingPage = () => {
          return(
            <div className='admin-page'>
                <h1>Tervetuloa ylläpitohommiin!</h1>
                <p>If you are some hacker, pls don't destroy anything ;(</p>
                <button onClick={handleLogout}>Kirjaudu ulos...</button>
                <div className='Form'>
                    <form action="/profile" method="post" encType="multipart/form-data">
                        <div id='select-collection'>
                            <input 
                            type='text'
                            id='collection'
                            value={collection}
                            name='Collection'
                            placeholder='Kokoelman nimi...'
                            onChange={e => handleCollectionChange(e)}
                            />
                            <select>
                            <optgroup label="Lisää jo olemassa olevaan kokoelmaan">
                                {collectionsSelector}
                            </optgroup>
                            </select>
                        </div>
                        <input 
                        type='text'
                        id='name'
                        value={name}
                        name='name'
                        placeholder='taulun nimi'
                        onChange={e => handleNameChange(e)}
                        />
                        <input 
                        type='text'
                        id='description'
                        value={desc}
                        name='description'
                        placeholder='xcm x ycm, tekniikka'
                        onChange={e => handleDescChange(e)}
                        />
                        <input 
                          type="file"
                          id='painting'
                          name="Painting" 
                          onChange={e => handleFileChange(e)}
                        />
                        <button id='submit-button' onClick={addCollection}>lataa...</button>
                    </form>
                </div>
            </div>
          )
      }

    return (
        <div className='AdminPage'>
            <Message message={notification} style={notificationStyle} />
            {user === null ? 
            <Login 
            password={password} 
            handlePassChange={handlePassChange} 
            handleLogin={handleLogin} 
            /> : 
            <ModifyingPage 
            collection={collection}
            handleCollectionChange={handleCollectionChange}
            name={name}
            handleNameChange={handleNameChange}
            desc={desc}
            handleDescChange={handleDescChange}
            handleFileChange={handleFileChange}
            handleLogout={handleLogout}
            addCollection={addCollection}
            collectionsSelector={collectionsSelector}
            />}
        </div>
    )
}

export default AdminPage