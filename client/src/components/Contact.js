import React, { useState } from 'react'
import Form from './Form'
import emailService from '../services/email'
import './Contact.css'

const Contact = ( { lang } ) => {
  const [content, setContent] = useState('')
  const [email, setEmail] = useState('')
  const handleContentChange = e => setContent(e.target.value)
  const handleEmailChange = e => setEmail(e.target.value)

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const emailObj = {
        email: email,
        message: content
      }
      await emailService.mail(emailObj)
      setEmail('')
      setContent('')
    }
    catch(error){
      console.log(error)      
    }
  }

  return (
    <div className="Contact">
        <Form
          handleSubmit={handleSubmit}
          content={content}
          handleContentChange={handleContentChange}
          email={email}
          handleEmailChange={handleEmailChange}
          lang={lang}
        />
    </div>
  )
}

export default Contact