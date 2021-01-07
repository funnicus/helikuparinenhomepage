import React, { useState } from 'react'
import Painting from './Painting'
import './Paintings.css'

const Paintings = collection => {
    const [imgToShow, setToShow] = useState('')
    const [txtToShow, setTxtToShow] = useState('...')
    const [style, setStyle] = useState('notVisible')
    const showImage = (image, txt) => {
        setStyle('visible')
        setTxtToShow(txt)
        setToShow(image)
    }
    const closeImage = () => {
        setStyle('notVisible')
        setTxtToShow('...')
    }

    console.log(collection)

    const paintings = collection.paintings.map(p => {
        const image = process.env.NODE_ENV === 'production' ? `https://helikuparinen.fi/api/upload/images/${p.img}` : `localhost:3001/api/upload/images/${p.img}`
        return(
            <img className='gridPainting' src={image} alt={p.name} key={p.name} onClick={() => showImage(image, `${collection.lang === 'fi' ? p.name : p.nameEn} ${collection.lang === 'fi' ? p.description : p.descriptionEn}`)}></img>
        )
    })

    return (
        <div className='Paintings'>
            <Painting style={style} painting={imgToShow} closeImage={closeImage} txt={txtToShow}/>
            <h2>{collection.lang === 'fi' ? collection.name : collection.nameEn}</h2>
            <div className='Paintingsgrid'>
                {paintings}
            </div>
        </div>
    )
}

export default Paintings