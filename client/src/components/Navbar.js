import React, { useState } from 'react'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import {
  Link
} from "react-router-dom"
import useWindowDimensions from '../hooks/useWindowDimensions'

const Navbar = ({ id, lang, setLang, setFadein }) => {
  const [style, setStyle] = useState(true)
  const { height, width } = useWindowDimensions();

  const toggleMenu = () => setStyle(!style)

  return (
        <div>
          <button id='dropdown-btn' onClick={toggleMenu}><FontAwesomeIcon icon={!style ? faTimes : faBars} /></button>
          <nav id={id} className="Navbar" style={style && width < 770 ? { display: 'none' } : { display: 'flex' }}>
            <ul id='Left'>
                <li><Link to="/" onClick={() => setFadein('none')}>Heli Kuparinen</Link></li>
                <li><Link to="/about" onClick={() => setFadein('none')}>{lang === 'fi' ? 'Tietoa minusta' : 'About me' }</Link></li>
                <li><Link to="/paintings" onClick={() => setFadein('none')}>{lang === 'fi' ? 'Teokset' : 'Paintings' }</Link></li>
                <li><Link to="/contact" onClick={() => setFadein('none')}>{lang === 'fi' ? 'Ota yhteyttä' : 'Contact me' }</Link></li>
            </ul>
            <ul id='Right'>
              <li><button onClick={() => setLang('fi')}>FI</button></li>
              <li><button onClick={() => setLang('en')}>EN</button></li>
            </ul>
          </nav>
        </div>
  )
}

export default Navbar