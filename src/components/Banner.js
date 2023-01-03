import React, {useState, useEffect} from 'react'
import instance from '../baseUrl'
import './Banner.css'

function Banner({fetchUrl}) {
    const [movie, setMovies]=useState([])

    async function fetchData(){
        const result = await instance.get(fetchUrl)
        console.log(result);
        setMovies(result.data.results[
            Math.floor(Math.random()*result.data.results.length-1)
        ])
    }

    useEffect(()=>{
      fetchData()
    },[])

    const base_url = "https://image.tmdb.org/t/p/original/";

    function truncate(str,n){
      n=100;
    return str?.length ? str.substr(0,n-1)+" . . . ":str;
    }


console.log(movie);
  return (
    <div className='banner' style={
        {
            backgroundImage:`url(${base_url}${movie.backdrop_path})`,
            backgroundSize:"cover",
            backgroundPosition: "center"
        }}>
            <div className='banner_content'>
            <h1 className='banner_title'>{movie.name}</h1>
            <h3>{truncate(movie.overview)}</h3>
        </div>

    </div>
  )
}

export default Banner