// 1 - config react router
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'

import NavBar from './components/NavBar'
import Footer from './components/Footer';
import Home from './pages/Home'
import Movie from './pages/Movie'

function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/movie" element={ <Movie /> } />
      </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App