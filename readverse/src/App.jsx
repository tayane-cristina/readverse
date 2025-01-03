import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Rotas
import Home from './pages/Home';
import Header from './components/header/Header';
function App() {

  return (
    <BrowserRouter>

      <Header />
      <Routes>
        <Route path='/' exact element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
