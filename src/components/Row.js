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

        {movies.map(movie => {
            return <img src={`${base_url}${
                isLargeRow ? movie?.poster_path : movie?.backdrop_path}}`} alt={movie?.name}/>

        })}
        
    </div>
  )
}

export default Row