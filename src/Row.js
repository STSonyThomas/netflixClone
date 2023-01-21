import React,{useState, useEffect} from "react";
import axios from './axios';
import './Row.css';
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

function Row ({title, fetchUrl,isLargeRow}) {
    const baseUrl="https://image.tmdb.org/t/p/original/";
    const [Movies,setMovies] =useState([]);
    const [trailerUrl,setTrailerUrl] =useState("");
    // create a function that loads the movie list once instead of each time a movie is added to the list, it reloading.
    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    },[fetchUrl])
    const opts= {
        height:"390",
        width:"100%",
        playerVars: {
            autoplay:1,
        },
    };
    const handleClick = (movie)=>{
        if(trailerUrl){
            setTrailerUrl("");
        }else{
            movieTrailer(movie?.name || "")
                .then((url)=>{
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get('v'));
                }).catch((error)=>console.log(error));

        }
    }

    return(
        <div className="row">
            <h2>{title}</h2>
            <div className="row_posters">
                {Movies.map(movie=>(
                    <img key={movie.id} onClick={()=>handleClick(movie)} className={`row_poster ${isLargeRow && "row_posterLarge"}`} src={`${baseUrl}${isLargeRow? movie.poster_path: movie.backdrop_path}`} alt={movie.name} />
                    )
                    )}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Row;