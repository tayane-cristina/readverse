import React from 'react';
import CreateTheChallenge from '../../components/createTheChallenge/CreateTheChallenge';
import { AdaptedForFilmData } from '../../data/challenges/AdaptedForFilmData';

const AdaptedForFilm = () => {

return(
    <div>
         <CreateTheChallenge challengeTitle={`10 Livros adaptados para o cinema`} listOfBooks={AdaptedForFilmData}/>
    </div>

)
}
export default AdaptedForFilm;