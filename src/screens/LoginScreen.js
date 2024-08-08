import React from 'react'
import "../css/LoginScreen.css"

const LoginScreen = () => {
  return (
    <div className='loginScreen'>
        <div className="loginScreen_background">
            <img 
                className='loginScreen_logo'
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQeRoc_BhrP-jahuwf0Hrxe48LiP6DiHWiiw&s'
                alt='login screen logo'
            />
            <button className='loginScreen_button' onClick="">
                Sign in
            </button>
            <div className="loginScreen_gradient"></div>

            <div className="loginScreen_body">
                
            </div>
        </div>
    </div>
  )
}

export default LoginScreen