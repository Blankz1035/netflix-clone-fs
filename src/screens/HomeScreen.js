import React from 'react'
import "../css/HomeScreen.css"
import Nav from '../components/Nav'
import Banner from '../components/Banner'
import Row from '../components/Row'
import requests from '../scripts/requests'


const HomeScreen = () => {
  return (
    <div className='homeScreen'>
        <Nav />
 
        {/* Banner */}
        <Banner />
        {/* Row */}

        <Row 
          title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow
        />
        <Row 
          title="Trending Now" fetchUrl={requests.fetchTrendingAllWeek} isLargeRow
        />
        <Row 
          title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} isLargeRow
        />
        <Row 
          title="Action Movies" fetchUrl={requests.fetchActionMovies} isLargeRow
        />
        <Row 
          title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} isLargeRow
        />
        <Row 
          title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} isLargeRow
        />
        <Row 
          title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies} isLargeRow
        />
        <Row 
          title="Documentaries" fetchUrl={requests.fetchDocumentaries} isLargeRow
        />
        HomeScreen
    
    </div>
  )
}

export default HomeScreen