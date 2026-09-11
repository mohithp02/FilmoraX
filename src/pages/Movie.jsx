import React, { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom";
import Header from '../components/Header';

function Movie() {
  const location = useLocation()
  const movieApi = location.state?.movie;
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    if (!movieApi) return;

    fetch(`https://www.omdbapi.com/?i=${movieApi}&apikey=d150240d`)
      .then(response => response.json())
      .then(data => {
        setMovie(data);
      });
  }, [movieApi]);

  if (!movieApi) {
    return (
      <div className='movie-page'>
        <div className='detail-card empty-detail'>
          <p>No movie selected.</p>
        </div>
      </div>
    );
  }

  if (!movie) {
    return (
      <div className='movie-page'>
        <div className='detail-card loading-detail'>
          <p>Loading movie details...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className='movie-page'>
        <div className='detail-card'>
        <div className='detail-grid'>
          <div className='detail-poster-wrap'>
            <img
              src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400x600?text=No+Image'}
              className='detail-poster'
              alt={movie.Title}
            />
          </div>

          <div className='detail-content'>
            <div className='detail-meta'>
              <span>{movie.Year}</span>
              <span>{movie.Rated}</span>
              <span>{movie.Runtime}</span>
            </div>

            <h3 className='detail-title'>{movie.Title}</h3>

            <div className='detail-info-grid'>
              <p><strong>Genre:</strong> {movie.Genre}</p>
              <p><strong>Director:</strong> {movie.Director}</p>
              <p><strong>Writer:</strong> {movie.Writer}</p>
              <p><strong>Actors:</strong> {movie.Actors}</p>
              <p><strong>Released:</strong> {movie.Released}</p>
              <p><strong>Language:</strong> {movie.Language}</p>
              <p><strong>Country:</strong> {movie.Country}</p>
              <p><strong>Box Office:</strong> {movie.BoxOffice}</p>
              <p><strong>Awards:</strong> {movie.Awards}</p>
              <p><strong>IMDB Rating:</strong> {movie.imdbRating} ({movie.imdbVotes} votes)</p>
              <p><strong>Metascore:</strong> {movie.Metascore}</p>
              <p><strong>IMDB ID:</strong> {movie.imdbID}</p>
            </div>

            <p className='detail-plot'><strong>Plot:</strong> {movie.Plot}</p>

            {movie.Ratings && movie.Ratings.length > 0 && (
              <div className='ratings-box'>
                <h5>Ratings</h5>
                <ul>
                  {movie.Ratings.map((r, index) => (
                    <li key={index}><strong>{r.Source}:</strong> {r.Value}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Movie
