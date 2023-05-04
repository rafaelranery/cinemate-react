/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

import backupImg from '../assets/images/backup.png'

export const Card = ({movie}) => {
    
    return (
        <div key={movie && movie.id} className="max-w-sm m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Link to={`/movie/${movie && movie.id}`}>
                <img className="rounded-t-lg" src={movie && movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : backupImg} alt="" />
            </Link>
            <div className="p-5">
                <Link to={`/movie/${movie && movie.id}`}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{movie && movie.original_title}</h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{movie && movie.overview}</p>
            </div>
        </div>
    )
}
