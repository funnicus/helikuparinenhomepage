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

    const paintings = collection.paintings.map(p => {
        return(
            <img className='gridPainting' src={p.img} alt={p.name} onClick={() => showImage(p.img, `${p.name}, ${p.dimensions}, ${p.technique}`)}></img>
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