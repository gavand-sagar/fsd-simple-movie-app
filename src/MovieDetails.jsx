import { Rating } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function getTime(runtime){
    if(runtime){
        let hours = parseInt(runtime / 60)
        let minutes = runtime % 60;
        return `${hours}h ${minutes}m`
    }
}

export default function MovieDetails() {
    const { id } = useParams();
    //call api and get detailed info of movie and show it in UI
    const [movie, setMovie] = useState();

    useEffect(() => {
        const url = 'https://api.themoviedb.org/3/movie/' + id;
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNzlkYzlhMjA2MzdmZjY0YWIwOGQ3MmU4NzZkZTM4MCIsInN1YiI6IjY1NTMyMDY4NjdiNjEzNDVjY2FkZTEyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.W6wWg8vfXcNCyX7GebqtFEAo_0iHk31Eqf5pWaT8sJ0'
            }
        };

        fetch(url, options)
            .then(res => res.json())
            .then(json => setMovie(json))
            .catch(err => console.error('error:' + err));
    }, [])

    return (
        <div className='details-container'>
            <div>
                <img src={'https://image.tmdb.org/t/p/original' + movie?.poster_path} />
            </div>
            <div>
                <h1>{movie?.title}</h1>
                <h3>{movie?.genres?.map(x => x.name)?.join(',')}</h3>
                <p>{movie?.tagline}</p>
                <p>{getTime(movie?.runtime)}</p>
                <p>{movie?.vote_average} Vote Average From {movie?.vote_count} total votes</p>
            </div>

        </div>
    )
}


