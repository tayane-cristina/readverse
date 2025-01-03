import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Rotas
import Home from './pages/Home';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
 
  )
}

export default App
