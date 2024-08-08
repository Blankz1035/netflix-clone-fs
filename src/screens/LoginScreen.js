import React, { useState } from 'react'
import "../css/LoginScreen.css"
import SignUpScreen from './SignUpScreen';

const LoginScreen = () => {
    const [signin, setSignin] = useState(false);



  return (
    <div className='loginScreen'>
        <div className="loginScreen_background">
            <img 
                className='loginScreen_logo'
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQeRoc_BhrP-jahuwf0Hrxe48LiP6DiHWiiw&s'
                alt='login screen logo'
            />
            <button className='loginScreen_button' onClick={() => setSignin(true)}>
                Sign in
            </button>
            <div className="loginScreen_gradient"></div>

            <div className="loginScreen_body">
                {signin ? (
                    <SignUpScreen />
                ): (
                    <>
                        <h1>Unlimited movies, TV programmes and much more!</h1>
                        <h2>Watch anywhere. Cancel anytime.</h2>
                        <h3>Ready to watch? Enter your email to create / restart your membership.</h3>
                        <div className="loginScreen_input">
                            <form>
                                <input type='email' placeholder='Email Address'/>
                                <button className='loginScreen_getStartedButton' onClick={() => setSignin(true)}>Get started</button>
                            </form>
                        </div>
                    </>
                )}
            </div>
        </div>
    </div>
  )
}

export default LoginScreen