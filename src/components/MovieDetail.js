import React from 'react';
import { useParams, Link } from 'react-router-dom';
import movies from '../data/movies';

const MovieDetail = () => {
  const { id } = useParams();
  const movie = movies.find((movie) => movie.id === parseInt(id));

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div className="movie-detail">
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <div className="trailer">
        <iframe 
          width="560" 
          height="315" 
          src={movie.trailer} 
          title={movie.title} 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen>
        </iframe>
      </div>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default MovieDetail;
