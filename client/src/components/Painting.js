import React from 'react'
import './Painting.css'

const Painting = ({ style, painting, closeImage, txt }) => {
   return (
    <div id={style} className='Painting' onClick={closeImage}>
        <div id='imageOverlay' >
            <img id='shownImage' src={painting} alt='image not found' />
            <p>{txt}</p>
        </div>
    </div>
   )
}

export default Painting