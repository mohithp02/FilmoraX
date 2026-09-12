import './App.css'
import Landing from './pages/Landing'
import Movieview from './pages/Movieview'
import { Route, Routes } from 'react-router-dom'
import Movie from './pages/Movie'
import Pnf from './pages/Pnf'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/Movieview' element={<Movieview />} />
        <Route path='/Movie' element={<Movie />} />
        <Route path='*' element={<Pnf />} />
      </Routes>
    </>
  )
}

export default App
