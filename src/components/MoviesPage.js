// .src/components/MoviesPage.js
// ./src/components/MoviesPage.js
import React from 'react';
import { useRouteMatch, Switch, Route, Link } from 'react-router-dom';

function MoviesPage({ movies }) {
  const match = useRouteMatch();
  console.log(match);

  // Assuming you have a list of movies and each movie has an id
  const movieLinks = movies.map((movie) => (
    <li key={movie.id}>
      <Link to={`${match.url}/${movie.id}`}>{movie.title}</Link>
    </li>
  ));

  return (
    <div>
      <h2>Movies</h2>
      <ul>
        {movieLinks}
      </ul>
      
      {/* Add routes to render movie details */}
      <Switch>
        <Route path={`${match.path}/:movieId`}>
          <MovieDetails />
        </Route>
      </Switch>
    </div>
  );
}

// Assuming you have a MovieDetails component to display movie details
function MovieDetails() {

  // Fetch movie details using movieId and display them

  return (
    <div>
      <h3>Movie Details</h3>
      {/* Display movie details here */}
    </div>
  );
}

export default MoviesPage;
