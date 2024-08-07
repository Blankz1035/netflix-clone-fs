import React from 'react'
import "../css/HomeScreen.css"
import Nav from '../components/Nav'
import Banner from '../components/Banner'

const HomeScreen = () => {
  return (
    <div className='homeScreen'>
        <Nav />
 
        {/* Banner */}
        <Banner />
        {/* Row */}
        HomeScreen
    
    </div>
  )
}

export default HomeScreen