// 1 - config react router
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'

import NavBar from './components/NavBar'
import Footer from './components/Footer';
import Session from './components/Session';
import Home from './pages/Home'
import Movie from './pages/Movie'
import AboutMovie from './components/AboutMovie';

function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/movie" element={ <Movie /> } />
        <Route path="/movie/session" element={ <Session /> } />
        <Route path="/movie/about" element={ <AboutMovie /> } />
      </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App