import React, { useEffect, useState } from 'react'
import axios from "../scripts/axios"
import requests from "../scripts/requests"
import "../css/Banner.css"

const Banner = () => {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const req = await axios.get(requests.fetchNetflixOriginals);

            setMovie(
                req.data.results[
                    Math.floor(Math.random() * req.data.results.length - 1)
                ]
            );
            return req;
        }

        fetchData()
    }, [])
    
    function truncateText(string, n) {
        return string?.length > n ? string.substr(0, n-1) + '...' : string;
    }


  return (
    <header className='banner' style={{
        backgroundImage: 
        `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundSize: "cover",
        backgroundPosition: "center center"

    }}>
        <div className="banner_contents">
            <h1 className="banner_title">
                {movie?.title || movie?.name || movie?.original_name}
            </h1> 
            <div className="banner_buttons">
                <button className='banner_button'>Play</button>
                <button className='banner_button'>My List</button>
            </div>
            <h1 className="banner_description">{truncateText(
                `${movie?.description || movie?.overview}
                `, 150)}</h1>
        </div>

        <div className="banner--fadeBottom" />
    </header>
  )
}

export default Banner