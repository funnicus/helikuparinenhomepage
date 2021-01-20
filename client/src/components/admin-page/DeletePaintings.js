import React from 'react'

const DeletePaintings = ({ dbCollections, deletePainting }) => {
    const collections = dbCollections.map(collection => {
        return (
            <div key={collection.id}>
                <h4>{collection.name}</h4>
                <ul>
                    {collection.paintings.map(p => {
                        return (<li key={p.id}>{p.name} <button onClick={e => {
                            e.preventDefault()
                            deletePainting(p.img)
                        }}>DELETE</button></li>)
                    })}
                </ul>
            </div>
        )
    })

    return (
        <div className='DeletePaintings'>
            {collections}
        </div>
    )
}

export default DeletePaintings