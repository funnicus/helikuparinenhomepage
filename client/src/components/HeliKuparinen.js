import React from 'react'
import './HeliKuparinen.css'

const HeliKuparinen = ({ lang }) => {
    return(
      <div className='Header'>
        <h1 className='HeaderText'>Heli Kuparinen</h1>
        <h3 className='HeaderText'>{lang === 'fi' ? 'Taidemaalari' : 'A Painter'}</h3>
      </div>
    )
}

export default HeliKuparinen