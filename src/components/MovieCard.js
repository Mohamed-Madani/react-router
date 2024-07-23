import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={movie.poster} alt={movie.title} style={{ width: '200px', height: '300px' }} />
      <h2>{movie.title}</h2>
      <Link to={`/movies/${movie.id}`}>View Details</Link>
    </div>
  );
};

export default MovieCard;
