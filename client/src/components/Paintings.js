import React, { useState } from 'react'
import uploadservice from '../services/upload'
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

    const paintings = collection.paintings.map(p => {
        const image = `www.helikuparinen.fi/api/upload/images/${p.img}`
        return(
            <img className='gridPainting' src={image} alt={p.name} onClick={() => showImage(image, `${p.name} ${p.description}`)}></img>
        )
    })

    return (
        <div className='Paintings'>
            <Painting style={style} painting={imgToShow} closeImage={closeImage} txt={txtToShow}/>
            <h2>{collection.name}</h2>
            <div className='Paintingsgrid'>
                {paintings}
            </div>
        </div>
    )
}

export default Paintings