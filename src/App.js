import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import "./App.css"
import MovieList from './components/Movielist/Movielist'
import Home from './components/Pages/Home/Home'
import Header from './components/Header/Header'
import MovieDetails from './components/Pages/MovieDetails/MovieDetails'

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path='movie/:id' element={<MovieDetails />}></Route>
          <Route path='movies/:type' element={<MovieList />}></Route>
          <Route path='/*' element={<h1>404 Error</h1>} ></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App 