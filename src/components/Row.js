import React, { useEffect, useState } from 'react'
import axios from "../scripts/axios"
import "../css/Row.css";


const Row = ({title, fetchUrl, isLargeRow = false}) => {
    const [movies, setMovies] = useState([])
    const base_url = "https://image.tmdb.org/t/p/original/";

    useEffect(() => {
        async function fetchData() {
            const req =  await axios.get(fetchUrl);
            setMovies(req.data.results);
            return req;
        }
        
        fetchData();
    }, [fetchUrl])

  return (
    <div className='row'>
        <h2 className='row_title'>
            {title}
        </h2>
        <div className="row_posters">
            {movies.map(
                (movie) => (
                (isLargeRow && movie.poster_path) || 
                (!isLargeRow && movie.backdrop_path)) &&  (
                 <img src={`${base_url}${
                    isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                    alt={movie?.name} 
                    className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                    key={movie.id}/>

                 )
            )}
        </div>
    </div>
  )
}

export default Row