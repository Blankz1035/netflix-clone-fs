import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';

import { BrowserRouter as Router, Routes,  Route } from "react-router-dom";
import LoginScreen from './screens/LoginScreen';
import { auth } from './firebase/firebase';



function App() {
  const user = null;

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if(userAuth){
        // logged in
      }
      else {
        // logged out.
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
