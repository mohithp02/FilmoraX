import React from 'react'
import { useNavigate } from 'react-router-dom';

function Movieview({ movies = [] }) {
    const navigate = useNavigate()

    const movieDetails = (movie) => {
        navigate('/Movie', { state: { movie } })
    }

    return (
        <div className='results-inner'>
            <div className='results-header'>
                <p className='results-label'>Results</p>
                <h2>Movies matching your search</h2>
            </div>

            {movies.length === 0 ? (
                <div className='empty-state'>
                    <p>Search for a movie to see results.</p>
                </div>
            ) : (
                <div className='results-grid'>
                    {movies.map((m) => (
                        <button
                            key={m.imdbID}
                            type='button'
                            className='movie-card'
                            onClick={() => movieDetails(m.imdbID)}
                        >
                            <img
                                className='movie-poster'
                                src={m.Poster !== 'N/A' ? m.Poster : 'https://via.placeholder.com/200x300?text=No+Image'}
                                alt={m.Title}
                            />
                            <div className='movie-info'>
                                <p className='movie-title'>{m.Title}</p>
                                <p className='movie-year'>({m.Year})</p>
                            </div>
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Movieview
