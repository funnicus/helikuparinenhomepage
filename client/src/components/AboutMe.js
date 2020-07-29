import React from 'react'
import './AboutMe.css'
import statementTranslation from '../translations/statement'
import cvTranslation from '../translations/curriculum'
import aboutmeTranslation from '../translations/aboutme'
import { selfPortrait } from '../images/index'
import { Helmet } from 'react-helmet'
 
const AboutMe = ({ lang }) => {
  return (
    <div className="AboutMe">
      <Helmet >
        <title>About me</title>
        <meta name='description' content='I am a Helsinki-based artist who mainly works with oilpaints. 
                Currently, I am particulary interested in portraying people in
                my works. On the background, I have a solid understanding 
                of the living model, aqcuired from my studies, as well as an academic degree
                in painting.' />
      </Helmet>
      <div className='Bio'>
        <div className='Bio-div'>
          {lang === 'fi' ? aboutmeTranslation.aboutmeFi() : aboutmeTranslation.aboutmeEn()}
          <div id='portrait'><img src={selfPortrait} alt='self-portrait' /></div>
        </div>
      </div>
      <hr></hr>
      {lang === 'fi' ? cvTranslation.cvFi() : cvTranslation.cvEn()}
      <hr></hr>
      <div className='Statement'>
          {lang === 'fi' ? statementTranslation.statementFi() : statementTranslation.statementEn()}
      </div>
      <hr></hr>
    </div>
  )
}

export default AboutMe