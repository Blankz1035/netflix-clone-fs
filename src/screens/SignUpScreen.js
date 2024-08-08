import React, { useRef } from 'react'
import "../css/SignupScreen.css"
import { auth } from '../firebase/firebase';


const SignUpScreen = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  
  const register = (e) => {
    e.preventDefault();

    auth.createUserWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value,
    )
    .then((authUser) => {
      console.log(authUser);
    })
    .catch((error) => {
      alert(error.message);
    });


  }

  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value,
    )
    .then((authUser) => {
      console.log(authUser);
    })
    .catch((error) => alert(error.message));
  }

  return (
    <div className='signupscreen'>
      <form>
        <h1>Sign in</h1>
        <input type="email" placeholder='Email' ref={emailRef}/>
        <input type="password" placeholder='Password' ref={passwordRef}/>
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