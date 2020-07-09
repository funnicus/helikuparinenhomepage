import React from 'react'
import './Painting.css'

const Painting = ({ style, painting, closeImage, txt }) => {
   return (
    <div id={style} className='Painting' onClick={closeImage}>
        <img id='shownImage' src={painting} />
        <p>{txt}</p>
    </div>
   )
}

export default Painting