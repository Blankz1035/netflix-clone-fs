import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';

import { BrowserRouter as Router, Routes,  Route } from "react-router-dom";
import LoginScreen from './screens/LoginScreen';
import { auth } from './firebase/firebase';
import { useDispatch } from "react-redux"
import { login, logout } from './features/userSlice';


function App() {
  const user = null;
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
        <Routes>
          {!user ? (
            <Route exact path="/login" element={<LoginScreen />}/>
          ) : (
            <Route exact path="/" element={<HomeScreen/>}/>
          )}
        </Routes>
    </Router>
    </div>
  );
}

export default App;
