import React from 'react'
import paintingService from '../services/email'
import './Paintings.css'

const Paintings = () => {
    const test = async () => {
        const pp = await paintingService.getAll()
        console.log(pp)
    }
    const paintigsPlaceholderJSON = [
        {
            name: 'Paintign 1',
            year: '2000',
            dimensions: '100x30cm',
            technique: 'Oil on canvas',
            img: 'http://www.elisanet.fi/kupariset/heli/img/portfolio/lajinsa-viimeinen.jpg',
            showOrder: 0
        },
        {
            name: 'Paintign 2',
            year: '2000',
            dimensions: '100x30cm',
            technique: 'Oil on canvas',
            img: 'http://www.elisanet.fi/kupariset/heli/img/portfolio/tunto.jpg',
            showOrder: 1
        },
        {
            name: 'Paintign 3',
            year: '2000',
            dimensions: '100x30cm',
            technique: 'Oil on canvas',
            img: 'http://www.elisanet.fi/kupariset/heli/img/portfolio/lajinsa-viimeinen.jpg',
            showOrder: 2
        },
        {
            name: 'Paintign 1',
            year: '2000',
            dimensions: '100x30cm',
            technique: 'Oil on canvas',
            img: 'http://www.elisanet.fi/kupariset/heli/img/portfolio/lajinsa-viimeinen.jpg',
            showOrder: 0
        },
        {
            name: 'Paintign 2',
            year: '2000',
            dimensions: '100x30cm',
            technique: 'Oil on canvas',
            img: 'http://www.elisanet.fi/kupariset/heli/img/portfolio/joro.jpg',
            showOrder: 1
        },
        {
            name: 'Paintign 3',
            year: '2000',
            dimensions: '100x30cm',
            technique: 'Oil on canvas',
            img: 'http://www.elisanet.fi/kupariset/heli/img/portfolio/lajinsa-viimeinen.jpg',
            showOrder: 2
        },
        {
            name: 'Paintign 1',
            year: '2000',
            dimensions: '100x30cm',
            technique: 'Oil on canvas',
            img: 'http://www.elisanet.fi/kupariset/heli/img/portfolio/lajinsa-viimeinen.jpg',
            showOrder: 0
        },
        {
            name: 'Paintign 2',
            year: '2000',
            dimensions: '100x30cm',
            technique: 'Oil on canvas',
            img: 'http://www.elisanet.fi/kupariset/heli/img/portfolio/tunto.jpg',
            showOrder: 1
        },
        {
            name: 'Paintign 3',
            year: '2000',
            dimensions: '100x30cm',
            technique: 'Oil on canvas',
            img: 'http://www.elisanet.fi/kupariset/heli/img/portfolio/lajinsa-viimeinen.jpg',
            showOrder: 2
        },
    ]

    const paintings = paintigsPlaceholderJSON.map(p => {
        return(
            <img src={p.img} alt={p.name}></img>
        )
    })

    test()

    return (
        <div className='Paintings'>
            {paintings}
        </div>
    )
}

export default Paintings