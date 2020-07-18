import React from 'react'
import { Helmet } from 'react-helmet'
import './HeliKuparinen.css'

const HeliKuparinen = ({ lang }) => {
    return(
      <div className='Header'>
        <Helmet >
          <title>Heli Kuparinen</title>
          <meta name='description' content='Hello! my name is Heli Kuparinen, welcome to my homepage!' />
        </Helmet>
        <h1 className='HeaderText'>Heli Kuparinen</h1>
        <h3 className='HeaderText'>{lang === 'fi' ? 'Taidemaalari' : 'A Painter'}</h3>
      </div>
    )
}

export default HeliKuparinen