import React from 'react'
import "../css/Banner.css"

const Banner = () => {
    function truncateText(string, n) {
        return string?.length > n ? string.substr(0, n-1) + '...' : string;
    }
  return (
    <header className='banner' style={{
        backgroundImage: `url("https://cdn.playbackonline.ca/wp/wp-content/uploads/2020/05/Screen-Shot-2020-05-04-at-1.41.10-PM.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center center"

    }}>
        <div className="banner_contents">
            <h1 className="banner_title">
                Movie
            </h1> 
            <div className="banner_buttons">
                <button className='banner_button'>Play</button>
                <button className='banner_button'>My List</button>
            </div>
            <h1 className="banner_description">{truncateText(
                `this is a test description 
                this is a test description 
                this is a test description
                this is a test description 
                this is a test description
                this is a test description 
                this is a test description
                `, 100)}</h1>
        </div>

        <div className="banner--fadeBottom" />
    </header>
  )
}

export default Banner