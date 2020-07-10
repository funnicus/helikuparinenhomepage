const paintingsRouter = require('express').Router()

const paintingsPlaceholderJSON = [
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

paintingsRouter.get('/', async (req, res) => {
    res.json(paintingsPlaceholderJSON)
})

paintingsRouter.get('/:id', async (req, res) => {
    res.json(paintingsPlaceholderJSON[2])
})

module.exports = paintingsRouter