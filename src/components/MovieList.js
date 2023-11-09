// MoviesList.js
import React from 'react';
import { Link } from 'react-router-dom';

function MoviesList({ movies }) {
  const renderMovies = Object.keys(movies).map((movieID) => (
    <li key={movie.id}>
      <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
    </li>
  ))
  return <ul>{rendeerMovies}</ul>
}

export default MoviesList;
