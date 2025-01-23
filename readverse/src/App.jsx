import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Rotas
import Home from './pages/home/Home';
import Header from './components/header/Header';
import Collection from './pages/Collection';
import TwelveBooksFor from './pages/readChallengesPages/TwelveBooksFor';
import ThirtyBeforeThirty from './pages/readChallengesPages/ThirtyBeforeThirty' ;
import AdaptedForFilm from './pages/readChallengesPages/AdaptedForFilm';
import Alphabet from './pages/readChallengesPages/Alphabet'
import AroundTheWorld from './pages/readChallengesPages/AroundTheWorld';
import ForDecades from './pages/readChallengesPages/ForDecades'
function App() {

  return (
    <BrowserRouter>

      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/collection' element={<Collection />}></Route>

        {/*Rotas para as páginas de desafios literários*/}
        <Route path='/twelvebooksfor' element={<TwelveBooksFor />}></Route>
        <Route path='/thirtybeforethirty' element={<ThirtyBeforeThirty />}></Route>
        <Route path='/adaptedforfilm' element={<AdaptedForFilm />}></Route>
        <Route path='/alphabet' element={<Alphabet />}></Route>
        <Route path='/aroundtheworld' element={<AroundTheWorld />}></Route>
        <Route path='/fordecade' element={<ForDecades />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
