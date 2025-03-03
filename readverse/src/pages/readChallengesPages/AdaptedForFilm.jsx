import React from 'react';
import CreateTheChallenge from '../../components/createTheChallenge/CreateTheChallenge';
import { AdaptedForFilmData } from '../../data/challenges/AdaptedForFilmData';

const AdaptedForFilm = () => {

return(
    <div>
         <CreateTheChallenge 
            challengeTitle={`10 Livros adaptados para o cinema`} 
            listOfBooks={AdaptedForFilmData} 
            introText={
                `Você ama livros e filmes? Então, esse desafio é para você! Embarque nessa jornada literária e cinematográfica, lendo 10 livros que 
                foram adaptados para o cinema. Você pode ler os livros no seu ritmo.
            `}
        />
    </div>

)
}
export default AdaptedForFilm;