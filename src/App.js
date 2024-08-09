import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';

import { BrowserRouter as Router, Routes,  Route } from "react-router-dom";
import LoginScreen from './screens/LoginScreen';
import { auth } from './firebase/firebase.js';
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
        console.log("User logged in:", userAuth);
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        })); 
      }
      else {
        // logged out.
        dispatch(logout()) // reset user back to null
        console.log("User logged out");
      }
    });

    return unsubscribe;
  },[dispatch])


  return (
    <div className="app">
      <Router>
        <Routes>
          {!user ? (
            <Route path="/" element={<LoginScreen />} />
          ) : (
            <>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/profile" element={<ProfileScreen />} />
            </>
          )}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
