import React from 'react';
import { movies } from '../data';

const renderMovies = (movie, idx) => {
  return (
    <div key={idx}>
      <h3>Name: {movie.title}</h3>
      <p>Time: {movie.time}</p>
      Genres:
      <ul>
        {movie.genres.map((genre, i) => <li key={i}>{genre}</li>)}
      </ul>
    </div>
  )
}

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie, idx) => renderMovies(movie, idx))}
    </div>
  );
};

export default Movies;
