import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard';
import MovieCardPlaceHolder from './MovieCardPlaceHolder';
export default function MovieSection({ url, heading }) {
    let [array, setArray] = useState([]);
    let [isLoading, setLoading] = useState(false)
    useEffect(() => {
        //this code will be executed at time of creation
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNzlkYzlhMjA2MzdmZjY0YWIwOGQ3MmU4NzZkZTM4MCIsInN1YiI6IjY1NTMyMDY4NjdiNjEzNDVjY2FkZTEyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.W6wWg8vfXcNCyX7GebqtFEAo_0iHk31Eqf5pWaT8sJ0'
            }
        };

        setLoading(true)
        fetch(url, options)
            .then(res => res.json())
            .then(json => {
                // this is where you will get response of api
                setArray(json.results)
            })
            .catch(err => console.error('error:' + err))
            .finally(() => {
                setLoading(false)
            });
    }, [])


    return (
        <div className="App">
            <h1>{heading}</h1>
            {
                isLoading == true ?
                    [1, 2, 3, 3, 45, 6, 7, 89, 0, 98, 65, 432, 1, 234567, 890, 98, 7654, 32, 23].map(x => <MovieCardPlaceHolder />)
                    : array.map(movie => <a href={'/details/' + movie.id}><MovieCard poster_path={movie.poster_path} title={movie.title} release_date={movie.release_date} vote_average={movie.vote_average} /></a>)
            }
        </div>
    );
}
