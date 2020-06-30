import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="Navbar">
        <ul>
            <li><a href="default.asp">Heli Kuparinen</a></li>
            <li><a href="news.asp">Tietoa minusta</a></li>
            <li><a href="news.asp">Teokset</a></li>
            <li><a href="news.asp">Ota yhteyttä</a></li>
        </ul> 
    </div>
  )
}

export default Navbar