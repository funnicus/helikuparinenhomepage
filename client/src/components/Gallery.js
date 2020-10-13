import React, { useState, useEffect } from 'react'
import Paintings from './Paintings'
import paintingsService from '../services/paintings'
import { Helmet } from 'react-helmet'
import './Gallery.css'
import { Collection } from 'mongoose'

const Gallery = () => {
    const [dbCollections, setDbCollections] = useState([])

    useEffect(() => {
        const fetchCollections = async () => {
          const receivedCollections = await paintingsService.getAll()
          setDbCollections(receivedCollections)
        }
        fetchCollections()
      }, [])

    const collections = dbCollections.map(collection => {
        return <Paintings name={collection.name} paintings={collection.paintings} key={collection.name} />
    })

    return (
        <div className='Gallery'>
            <Helmet >
                <title>Gallery</title>
                <meta name='description' content='Here you can see all my paintnigs and the collections associated with them.' />
            </Helmet>
            {collections}
        </div>
    )
}

export default Gallery