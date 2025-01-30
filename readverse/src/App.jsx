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
import MenuQuiz from './pages/quiz/MenuQuiz';
import  GuessBookQuiz  from './pages/quiz/GuessBookQuiz.jsx';
import HorrorFansQuiz from './pages/quiz/HorrorFansQuiz.jsx';
import ClassicFansQuiz from './pages/quiz/ClassicFansQuiz.jsx';
import AdventureFansQuiz from './pages/quiz/AdventureFansQuiz.jsx';
import FictionsFansQuiz from './pages/quiz/FictionsFansQuiz.jsx';
import RomanceFansQuiz from './pages/quiz/RomanceFansQuiz.jsx';
import Authors from './components/header/authors/Authors.jsx';
import About from './pages/about/About.jsx';
function App() {

  return (
    <BrowserRouter>

      <Header />
      <Routes>
        {/*Rotas do navbar*/}
        <Route path='/' element={<Home />}></Route>
        <Route path='/authors' element={<Authors />}></Route>
        <Route path='/collection' element={<Collection />}></Route>.
        <Route path='/about' element={<About />}></Route>


        {/*Rotas para as páginas de desafios literários*/}
        <Route path='/twelvebooksfor' element={<TwelveBooksFor />}></Route>
        <Route path='/thirtybeforethirty' element={<ThirtyBeforeThirty />}></Route>
        <Route path='/adaptedforfilm' element={<AdaptedForFilm />}></Route>
        <Route path='/alphabet' element={<Alphabet />}></Route>
        <Route path='/aroundtheworld' element={<AroundTheWorld />}></Route>
        <Route path='/fordecade' element={<ForDecades />}></Route>

        {/*Rotas para o quiz*/}
        <Route path='/menuquiz' element={<MenuQuiz />} ></Route>
        <Route path='/guessbookquiz' element={<GuessBookQuiz />}></Route>
        <Route path='/horrorfansquiz' element={<HorrorFansQuiz />}></Route>
        <Route path='/classicfansquiz' element={<ClassicFansQuiz />}></Route>
        <Route path='/adventurefansquiz' element={<AdventureFansQuiz />}></Route>
        <Route path='/fictionsfansquiz' element={<FictionsFansQuiz />}></Route>
        <Route path='/romancefansquiz' element={<RomanceFansQuiz />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
