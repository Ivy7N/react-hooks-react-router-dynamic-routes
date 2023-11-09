// MoviesPage.js (continued)
import React from 'react';
import { useRouteMatch, Route } from 'react-router-dom';
import MovieShow from './MovieShow';

function MoviesPage() {
  const match = useRouteMatch();
  console.log(match);

  return (
    <div>
      <h1>Movies</h1>
      <MoviesList movies={movies} />
      <Route path={`${url}/:movieId`}>
        <MovieShow movies={movies} />
      </Route>
    </div>
  );
}

export default MoviesPage;
