import React, { useState } from 'react'
import Form from './Form'
import './Contact.css'

const Contact = () => {
  const [content, setContent] = useState('')
  const handleContentChange = e => setContent(e.target.value)
  const handleSubmit = e => {
    e.preventDefault()
    setContent('')
  }
  return (
    <div className="Contact">
        <Form
          handleSubmit={handleSubmit}
          content={content}
          handleContentChange={handleContentChange}
        />
    </div>
  )
}

export default Contact