import React from 'react'
import {
  BrowserRouter as Router,
  Switch, Route, Link
} from "react-router-dom"
import AboutMe from './components/AboutMe'
import HeliKuparinen from './components/HeliKuparinen'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Paintings from './components/Paintings'
import './App.css'

const App = () => {
  return (
    <Router>
      <div className="Navbar">
        <ul>
            <li><Link to="/">Heli Kuparinen</Link></li>
            <li><Link to="/about">Tietoa minusta</Link></li>
            <li><Link to="/paintings">Teokset</Link></li>
            <li><Link to="/contact">Ota yhteyttä</Link></li>
        </ul> 
      </div>
      <Switch>
        <Route path='/about'>
          <AboutMe />
        </Route>
        <Route path='/paintings'>
          <Paintings />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
        <Route path='/'>
          <HeliKuparinen />
        </Route>
      </Switch>
      <div className='Footer'>
        <span>Copyright © Heli Kuparinen 2020</span>
      </div>
    </Router>
  )
}

export default App
