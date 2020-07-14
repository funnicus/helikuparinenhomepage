import React from 'react'
import './Message.css'

const Message = ({ message, style }) => {
  return (
    <div className="Message" style={style}>
        {message}
    </div>
  )
}

export default Message