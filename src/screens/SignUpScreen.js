import React from 'react'
import "../css/SignupScreen.css"

const SignUpScreen = () => {
  
  
  const register = (e) => {
    e.preventDefault();
  }

  const signIn = (e) => {
    e.preventDefault();

  }

  return (
    <div className='signupscreen'>
      <form>
        <h1>Sign in</h1>
        <input type="email" placeholder='Email'/>
        <input type="password" placeholder='Password'/>
        <button type='submit' onClick={signIn}>Sign in</button>
        <h4>
          <span className='signupScreen_grey'>New to Netflix? </span> 
          <span className='signupScreen_link' onClick={register}>Sign up now.</span>
        </h4>
      </form>
    </div>
  )
}

export default SignUpScreen