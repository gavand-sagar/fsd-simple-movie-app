import React from 'react'
import MovieSection from './MovieSection'

export default function Homepage() {
    return (
        <div>
            <MovieSection heading={'Top Rated'} url={'https://api.themoviedb.org/3/movie/top_rated'} />
            <MovieSection heading={'Upcoming'} url={'https://api.themoviedb.org/3/movie/upcoming'} />
            <MovieSection heading={'Popular'} url={'https://api.themoviedb.org/3/movie/popular'} />
            <MovieSection heading={'Trending'} url={'https://api.themoviedb.org/3/trending/movie/day?language=en-US'} />
        </div>
    )
}
