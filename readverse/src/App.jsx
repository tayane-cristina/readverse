import React from 'react';
import Header from './components/header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Rotas
import Home from './pages/home/Home';
import Books from './pages/books/Books';
import Authors from './pages/authors/Authors';
import Articles from './pages/articles/Articles';

function App() {

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path='/' exact element={<Home />}></Route>
        <Route path='/books' exact element={<Books/>}></Route>
        <Route path='/authors' exact element={<Authors />}></Route>
        <Route path='/articles' exact element={<Articles />}></Route>
      </Routes>
      
      
    </BrowserRouter>
 
  )
}

export default App
