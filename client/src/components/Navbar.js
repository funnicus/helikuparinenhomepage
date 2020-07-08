import React from 'react'
import './Navbar.css'
import {
  Link
} from "react-router-dom"

const Navbar = ({ id, lang, setLang, setFadein }) => {
  return (
          <div id={id} className="Navbar">
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
          </div>
  )
}

export default Navbar