import React from 'react'
import { Link } from 'react-router-dom'

function Pnf() {
  return (
    <div className='not-found-page'>
      <div className='not-found-card'>
        <div className='not-found-content'>
          <span className='hero-badge not-found-badge'>404</span>
          <h1 className='not-found-title'>Page not found</h1>
          <p className='not-found-subtitle'>
            The page you are looking for might have been moved, deleted, or never existed.
            Let&apos;s get you back to discovering great movies.
          </p>

          <div className='not-found-actions'>
            <Link to='/' className='not-found-btn primary'>Back to Home</Link>
            <button
              type='button'
              className='not-found-btn secondary'
              onClick={() => window.history.back()}
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pnf
