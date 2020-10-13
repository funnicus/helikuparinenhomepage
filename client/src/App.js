import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch, Route
} from "react-router-dom"
import AboutMe from './components/AboutMe'
import HeliKuparinen from './components/HeliKuparinen'
import Contact from './components/Contact'
import Gallery from './components/Gallery'
import Navbar from './components/Navbar'
import AdminPage from './components/AdminPage'
import './App.css'
import useWindowDimensions from './hooks/useWindowDimensions'

const App = () => {
  const [lang, setLang] = useState('fi')
  const [fadein, setFadein] = useState('Navbar-fadein')
  const { height, width } = useWindowDimensions()
  return (
    <Router>
      <Switch>
        <Route path='/about'>
          <Navbar id='none' lang={lang} setLang={setLang} setFadein={setFadein}/>
          <AboutMe lang={lang} />
        </Route>
        <Route path='/paintings'>
          <Navbar id='none' lang={lang} setLang={setLang} setFadein={setFadein}/>
          <Gallery />
        </Route>
        <Route path='/contact'>
          <Navbar id='none' lang={lang} setLang={setLang} setFadein={setFadein}/>
          <Contact lang={lang} />
        </Route>
        <Route path='/login'>
          <AdminPage />
        </Route>
        <Route path='/'>
          <Navbar id={width > 770 ? fadein : 'none'} lang={lang} setLang={setLang} setFadein={setFadein}/>
          <HeliKuparinen lang={lang} />
        </Route>
      </Switch>
      <footer className='Footer'>
        <span>Copyright © Heli Kuparinen 2020</span>
      </footer>
    </Router>
  )
}

export default App
