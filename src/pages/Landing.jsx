import React, { useEffect, useState } from 'react'
import Header from '../components/Header';
import Movieview from './Movieview';

function Landing() {
    const [movieState, setMovieState] = useState("")
    const [movies, setMovies] = useState([])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const checkMovie = (value) => {
        if (!value.trim()) {
            alert("Enter a valid Movie")
            return
        }

        fetch(`https://www.omdbapi.com/?s=${value}&apikey=d150240d`)
            .then((response) => response.json())
            .then((movie) => {
                if (movie.Search) {
                    setMovies(movie.Search)
                    console.log(movie.Search);
                    document.getElementById('movieDetails')?.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    })
                } else {
                    setMovies([])
                    alert("Enter a valid Movie")
                }
            })
            .catch(() => {
                setMovies([])
                alert("Something went wrong. Please try again.")
            })
    }

    return (
        <div id='top' className='landing-page'>
            <Header />
            <section className='hero-section'>
                <div className='hero-content'>
                    <span className='hero-badge'>MovieScan</span>
                    <h1 className='hero-title'>Discover your next favorite movie</h1>
                    <p className='hero-subtitle'>Search the latest movies, explore results instantly, and open any title for full details.</p>

                    <div id='landing-search' className='search-panel'>
                        <div className='search-row'>
                            <input
                                placeholder='Enter a Movie'
                                className='search-input'
                                value={movieState}
                                onChange={(e) => setMovieState(e.target.value)}
                            />
                            <button className='search-btn' onClick={() => checkMovie(movieState)}>
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section id='movieDetails' className='results-section'>
                <Movieview movies={movies} />
            </section>
        </div>
    )
}

export default Landing
