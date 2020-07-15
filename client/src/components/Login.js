import React from 'react'

const Login = ({ password, handlePassChange, handleLogin }) => {
    return(
      <div className="Form">
          <form onSubmit={handleLogin}>
          <div id='input-field'>
              <input 
              type='password'
              id='password'
              value={password}
              name='Password'
              placeholder='...'
              onChange={e => handlePassChange(e)}
              />
              <button id='submit-button' type="submit">Kirjaudu sisään...</button>
          </div>
          </form>
      </div>
    )
}

export default Login