import React from 'react'
import "../css/ProfileScreen.css"
import Nav from '../components/Nav'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import { auth } from '../firebase/firebase'
import { replace, useNavigate  } from "react-router-dom";
import PlansComponent from '../components/PlansComponent'

const ProfileScreen = () => {
    const user = useSelector(selectUser);
    const navigate = useNavigate();

  return (
    <div className='profileScreen'>
        <Nav />
        <div className="profileScreen_body">
            <h1>Edit Profile</h1>
            <div className="profileScreen_info">
                <img
                    
                    src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                    alt="Avatar"
                    />
                <div className="profileScreen_details">
                    <h2>{user.email}</h2>
                    <div className="profileScreen_plans">
                        <PlansComponent />
                        <button 
                            className='profileScreen_signOut'
                            onClick={() => {
                                    auth.signOut();
                                    navigate('/');
                                    console.log("User signed out successfully");
                                }
                            }
                        > 
                            Sign out
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileScreen