import { Skeleton } from '@mui/material'
import React from 'react'

export default function MovieCardPlaceHolder() {
    return (
        <div className='movie-card'>
            <div className='movie-poster'>
                <Skeleton width={'200px'} height={'300px'} />
            </div>
            <div className='movie-title'>
                <Skeleton width={'200px'} height={'50px'} />
            </div>
            <div className='movie-release-date'>
                <Skeleton width={'200px'} height={'50px'} />
            </div>
            <div>
                <Skeleton width={'200px'} height={'50px'} />
            </div>
        </div>
    )
}
