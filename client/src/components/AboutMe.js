import React from 'react'
import './AboutMe.css'
import statementTranslation from '../translations/statement'
import cvTranslation from '../translations/curriculum'
import aboutmeTranslation from '../translations/aboutme'
import { selfPortrait } from '../images/index'

const AboutMe = ({ lang }) => {
  return (
    <div className="AboutMe">
      <div className='Bio'>
        {lang === 'fi' ? aboutmeTranslation.aboutmeFi() : aboutmeTranslation.aboutmeEn()}
        <div id='portrait'><img src={selfPortrait} alt='self-portrait' /></div>
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