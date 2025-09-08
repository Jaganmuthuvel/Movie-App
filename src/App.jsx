import React from 'react';
import { useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Watchlist from './pages/Watchlist';
import Home from './pages/Home';
import { WatchListProvider } from './components/WatchListContext';



function App() {
  
  return (

    <>
      <WatchListProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Watchlist' element={<Watchlist />} />
          </Routes>
        </BrowserRouter>
      </WatchListProvider>
    </>
  )
}

export default App
