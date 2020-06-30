import React from 'react'
import './Form.css'

const Form = ({ handleSubmit, content, handleContentChange}) => {
  return (
    <div className="Form">
        <form onSubmit={handleSubmit}>
            <div>
            <textarea
            type="text"
            id='content'
            value={content}
            name="Content"
            onChange={e => handleContentChange(e)}
            >
                ...
            </textarea>
            </div>
            <button id='submit-button' type="submit">send!</button>
        </form>
    </div>
  )
}

export default Form