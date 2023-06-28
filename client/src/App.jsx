import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import React from 'react'
import Home from './routes/Home';
import NavBar from './components/NavBar';

const App = () => {
  return (<>
  <NavBar />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </>)
}

export default App