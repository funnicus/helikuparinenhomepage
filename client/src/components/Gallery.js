import React, { useState } from 'react'
import Paintings from './Paintings'
import './Gallery.css'
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

const Gallery = () => {
    const collectionsJSON = [
        {
            name: 'collection1',
            paintings: [
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
        },
        {
            name: 'collection2',
            paintings: [
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
                }
            ]
        },
        {
            name: 'collection3',
            paintings: [
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
                }
            ]
        },
        {
            name: 'collection4',
            paintings: [
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
                }
            ]
        }
    ]

    const collections = collectionsJSON.map(collection => {
        return <Paintings name={collection.name} paintings={collection.paintings}/>
    })

    return (
        <div className='Gallery'>
            {collections}
        </div>
    )
}

export default Gallery