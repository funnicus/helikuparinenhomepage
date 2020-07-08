import React from 'react'
import './AboutMe.css'
import statementTranslation from '../translations/statement'

const AboutMe = ({ lang }) => {
  return (
    <div className="AboutMe">
      <div className='Curriculum'>
        <h2>Curriculum</h2>
        <div className='CurriculumSection'>
          <h4>Opinnot</h4>
          <div className='CurriculumRow'><div className='Year'><strong>1985</strong></div><div className='Desc'>Ylioppilas, Torkkelin kuvataidepainoitteinen lukio</div></div>
          <div className='CurriculumRow'><div className='Year'><strong>1986-87</strong></div><div className='Desc'>Limingan kansanopiston taidekoulu</div></div>
          <div className='CurriculumRow'><div className='Year'><strong>1987-89</strong></div><div className='Desc'>Nordiska Konstskolan</div></div>
          <div className='CurriculumRow'><div className='Year'><strong>1993</strong></div><div className='Desc'>Kuvataiteen kandidaatti, Kuvataideakatemi</div></div>
          <div className='CurriculumRow'><div className='Year'><strong>1995</strong></div><div className='Desc'>Kuvataiteen maisteri, Kuvataideakatemi</div></div>
        </div>
        <div className='CurriculumSection'>
          <h4>Yksityisnäyttelyt</h4>
          <div className='CurriculumRow'><div className='Year'><strong>1985</strong></div><div className='Desc'>Ylioppilas, Torkkelin kuvataidepainoitteinen lukio</div></div>
          <div className='CurriculumRow'><div className='Year'><strong>1986-87</strong></div><div className='Desc'>Limingan kansanopiston taidekoulu</div></div>
          <div className='CurriculumRow'><div className='Year'><strong>1987-89</strong></div><div className='Desc'>Nordiska Konstskolan</div></div>
          <div className='CurriculumRow'><div className='Year'><strong>1993</strong></div><div className='Desc'>Kuvataiteen kandidaatti, Kuvataideakatemi</div></div>
          <div className='CurriculumRow'><div className='Year'><strong>1995</strong></div><div className='Desc'>Kuvataiteen maisteri, Kuvataideakatemi</div></div>
        </div>
        <div className='CurriculumSection'>
          <h4>Yhteisnäyttelyt</h4>
          <div className='CurriculumRow'><div className='Year'><strong>1985</strong></div><div className='Desc'>Ylioppilas, Torkkelin kuvataidepainoitteinen lukio</div></div>
          <div className='CurriculumRow'><div className='Year'><strong>1986-87</strong></div><div className='Desc'>Limingan kansanopiston taidekoulu</div></div>
          <div className='CurriculumRow'><div className='Year'><strong>1987-89</strong></div><div className='Desc'>Nordiska Konstskolan</div></div>
          <div className='CurriculumRow'><div className='Year'><strong>1993</strong></div><div className='Desc'>Kuvataiteen kandidaatti, Kuvataideakatemi</div></div>
          <div className='CurriculumRow'><div className='Year'><strong>1995</strong></div><div className='Desc'>Kuvataiteen maisteri, Kuvataideakatemi</div></div>
        </div>
        <div className='CurriculumSection'>
          <h4>Kokoelmat</h4>
          <div className='CurriculumRow'><div className='Desc'>l'Institut français de Finlande</div></div>
        </div>
        <div className='CurriculumSection'>
          <h4>Jäsennyydet</h4>
          <div className='CurriculumRow'><div className='Desc'>Taidemaalariliitto, Helsingin Taiteilijaseura</div></div>
        </div>
        <div className='CurriculumSection'>
          <h4>Opetustehtävät</h4>
          <div className='CurriculumRow'><div className='Year'><strong>1996</strong></div><div className='Desc'>Yleisradion kuvataidekerhon opettaja</div></div>
          <div className='CurriculumRow'><div className='Year'><strong>2008-2011</strong></div><div className='Desc'>MLL:n kuvataidekerhon opettaja</div></div>
          <div className='CurriculumRow'><div className='Year'><strong>2008-</strong></div><div className='Desc'>Helsingin Taiteilijaseuran kuvataidekoulun opettaja</div></div>
          <div className='CurriculumRow'><div className='Year'><strong>2010-2015</strong></div><div className='Desc'>Pohjois-Helsingin kuvataidekoulun sijaisopettaja</div></div>
        </div>
        <div className='CurriculumSection'>
          <h4>Luottamustehtävät</h4>
          <div className='CurriculumRow'><div className='Desc'>Helsingin Taiteilijaseuran hallituksen jäsen 2014–2016</div></div>
        </div>
      </div>
      <hr></hr>
      <div className='Statement'>
          {lang === 'fi' ? statementTranslation.statementFi() : statementTranslation.statementEn()}
      </div>
      <hr></hr>
    </div>
  )
}

export default AboutMe