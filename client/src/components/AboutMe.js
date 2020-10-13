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
      <section id='about-me-bio' className='Bio'>
        <div className='Bio-div'>
          {lang === 'fi' ? aboutmeTranslation.aboutmeFi() : aboutmeTranslation.aboutmeEn()}
          <div id='portrait'><img src={selfPortrait} alt='self-portrait' /></div>
        </div>
      </section>
      <hr></hr>
      <section id='curriculum-vitae'>
        {lang === 'fi' ? cvTranslation.cvFi() : cvTranslation.cvEn()}
      </section>
      <hr></hr>
      <section id='stmnt' className='Statement'>
          {lang === 'fi' ? statementTranslation.statementFi() : statementTranslation.statementEn()}
      </section>
      <hr></hr>
    </div>
  )
}

export default AboutMe