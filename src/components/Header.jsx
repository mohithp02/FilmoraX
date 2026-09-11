import React from 'react'
import { Link} from 'react-router-dom'

function Header() {
  

  return (
    <header className='top-header'>
      <div className='header-inner'>
        <div className='brand-wrap'>
          <div className='brand-mark'>M</div>
          <div>
            <p className='brand-name'>MovieScan</p>
          </div>
        </div>

        <nav className='main-nav'>
          <Link to={'/'}>Home</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
