import React from 'react'

export default function MovieCard({ title, poster_path, release_date, vote_average }) {
    return (
        <div className='movie-card'>
            <div className='movie-poster'>
                <img width={'100%'} src={'https://image.tmdb.org/t/p/original' + poster_path} />
            </div>
            <div className='movie-title'>
                {title}
            </div>
            <div className='movie-release-date'>
                {release_date}
            </div>
            <div>
            {"❤️".repeat(vote_average)}
            </div>
        </div>
    )
}
