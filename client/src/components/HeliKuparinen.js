import React from 'react'
import { Helmet } from 'react-helmet'
import './HeliKuparinen.css'

const HeliKuparinen = ({ lang }) => {
    return(
      <header className='Header'>
        <Helmet >
          <title>Heli Kuparinen</title>
          <meta name='description' content='Hello! my name is Heli Kuparinen, welcome to my homepage!' />
        </Helmet>
        <hgroup>
          <h1 className='HeaderText'>Heli Kuparinen</h1>
          <h3 className='HeaderText'>{lang === 'fi' ? 'Taidemaalari' : 'A Painter'}</h3>
        </hgroup>
      </header>
    )
}

export default HeliKuparinen