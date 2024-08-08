import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';

import { BrowserRouter as Router, Routes,  Route } from "react-router-dom";
import LoginScreen from './screens/LoginScreen';
import { auth } from './firebase/firebase';
import { useDispatch, useSelector } from "react-redux"
import { login, logout, selectUser } from './features/userSlice';
import ProfileScreen from './screens/ProfileScreen';


function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if(userAuth){
        // logged in
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        })); 
      }
      else {
        // logged out.
        dispatch(logout) // reset user back to null
      }
    });

    return unsubscribe;
  },[])


  return (
    <div className="app">
      <Router>
        {!user ? (
            <Route exact path="/" element={<LoginScreen />}/>
          ) : (
          <Routes>
              <Route exact path="/" element={<HomeScreen/>}/>
              <Route exact path="profile" element={<ProfileScreen/>}/>  
          </Routes>
        )}
    </Router>
    </div>
  );
}

export default App;
