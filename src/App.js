import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Featured from './components/Featured';
import Footer from './components/Footer';
import './components/Header';
import { moviesData } from './mov';
import MovieList from './components/MovieList';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Featured title="Featured Movies" />
      <main>
        <Routes>
        <Route path="/movie-list" element={<MovieList />} />
        </Routes>
      </main>
      
     
      <Footer />
    </div>
  );
}

export default App;
