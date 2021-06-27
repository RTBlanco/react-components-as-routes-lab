import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((dir, index) => {
        return(
          <div key={index}> 
            <h3>Name: {dir.name}</h3>
            <p>Genres:</p>
            <ul>
              {dir.movies.map((movie, i) => <li key={i}>{movie}</li>)}
            </ul>
          </div>
        )
      }) }
    </div>
  );
}

export default Directors
