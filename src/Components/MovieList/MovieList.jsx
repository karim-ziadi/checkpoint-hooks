import React from 'react'
import MovieCard from '../MovieCard/MovieCard'
import './MovieList.css'

function MovieList(props) {
    return (
        <div className="moviesList">
            {props.myMoviesList.map((element, i) => <MovieCard movie={element} key={i} />)}
        </div>
    )
}

export default MovieList
