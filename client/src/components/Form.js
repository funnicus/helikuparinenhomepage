import React from 'react'
import './Form.css'

const Form = ({ handleSubmit, content, handleContentChange, email, handleEmailChange, lang }) => {
  return (
    <div className="Form">
        <form onSubmit={handleSubmit}>
            <input 
            type='text'
            id='email'
            value={email}
            name='Email'
            placeholder='your@email.com'
            onChange={e => handleEmailChange(e)}
            />
            <textarea
            type="text"
            id='content'
            value={content}
            name="Content"
            placeholder={lang === 'fi' ? 'mitä kuuluu?' : 'what\'s on your mind?'}
            onChange={e => handleContentChange(e)}
            />
            <button id='submit-button' type="submit">send!</button>
        </form>
    </div>
  )
}

export default Form