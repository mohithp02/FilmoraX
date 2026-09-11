import { useState } from 'react'
import './App.css'
import Landing from './pages/Landing'
import Movieview from './pages/Movieview'
import { Route, Routes } from "react-router-dom"
import Movie from './pages/Movie'


function App() {


  return (
    < >
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Movieview" element={<Movieview />} />
        <Route path="/Movie" element={<Movie />} />
      </Routes>
    </>
  )
}

export default App
