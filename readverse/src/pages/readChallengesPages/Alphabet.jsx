import React from 'react';
import CreateTheChallenge from '../../components/createTheChallenge/CreateTheChallenge';
import { AlphabetData } from '../../data/challenges/AlphabetData';

const AdaptedForFilm = () => {

return(
    <div>
         <CreateTheChallenge challengeTitle={`1 Livros para cada letra do alfabeto`} listOfBooks={AlphabetData}/>
    </div>

)
}
export default AdaptedForFilm;