import './App.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar'
import LandingView from './LandingView';
import Hobbies from './Hobbies';
import Weather from './Weather';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Sidebar />
        <Routes>
          <Route index element={<LandingView />} />
          <Route path="hobbies" element={<Hobbies />} />
          <Route path="weather" element={<Weather />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}


export default App;
