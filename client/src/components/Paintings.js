import React, { useState } from 'react'
import paintingService from '../services/email'
import Painting from './Painting'
import './Paintings.css'
import {
    aamu,
    arktinenAnkka,
    iloisestiSekaisin,
    laivue,
    leivoksetLeipa,
    marieAntoinette,
    melankolia,
    robespierre,
    suomenSuvi
} from '../images/index'

const Paintings = () => {
    const [imgToShow, setToShow] = useState(aamu)
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
    const test = async () => {
        const pp = await paintingService.getAll()
        console.log(pp)
    }
    const paintigsPlaceholderJSON = [
        {
            name: 'aamu',
            year: '2000',
            dimensions: '100x30cm',
            technique: 'Oil on canvas',
            img: aamu,
            showOrder: 0
        },
        {
            name: 'arktinen-ankka',
            year: '2000',
            dimensions: '100x30cm',
            technique: 'Oil on canvas',
            img: arktinenAnkka,
            showOrder: 1
        },
        {
            name: 'iloisesti-sekaisin',
            year: '2000',
            dimensions: '100x30cm',
            technique: 'Oil on canvas',
            img: iloisestiSekaisin,
            showOrder: 2
        },
        {
            name: 'laivue',
            year: '2000',
            dimensions: '100x30cm',
            technique: 'Oil on canvas',
            img: laivue,
            showOrder: 0
        },
        {
            name: 'leivokset-leipa',
            year: '2000',
            dimensions: '100x30cm',
            technique: 'Oil on canvas',
            img: leivoksetLeipa,
            showOrder: 1
        },
        {
            name: 'marie-antoinette',
            year: '2000',
            dimensions: '100x30cm',
            technique: 'Oil on canvas',
            img: marieAntoinette,
            showOrder: 2
        },
        {
            name: 'melankolia',
            year: '2000',
            dimensions: '100x30cm',
            technique: 'Oil on canvas',
            img: melankolia,
            showOrder: 0
        },
        {
            name: 'robespierre',
            year: '2000',
            dimensions: '100x30cm',
            technique: 'Oil on canvas',
            img: robespierre,
            showOrder: 1
        },
        {
            name: 'suomen-suvi-big',
            year: '2000',
            dimensions: '100x30cm',
            technique: 'Oil on canvas',
            img: suomenSuvi,
            showOrder: 2
        },
    ]

    const paintings = paintigsPlaceholderJSON.map(p => {
        return(
            <img className='gridPainting' src={p.img} alt={p.name} onClick={() => showImage(p.img, `${p.name}, ${p.dimensions}, ${p.technique}`)}></img>
        )
    })

    test()

    return (
        <div className='Paintings'>
            <Painting style={style} painting={imgToShow} closeImage={closeImage} txt={txtToShow}/>
            <div className='Paintingsgrid'>
                {paintings}
            </div>
        </div>
    )
}

export default Paintings