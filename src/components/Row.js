import React, { useEffect, useState } from 'react'
import axios from "../scripts/axios"
import "../css/Row.css";


const Row = ({title, fetchUrl, isLargeRow = false}) => {
    const [movies, setMovies] = useState([])

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
        
    </div>
  )
}

export default Row