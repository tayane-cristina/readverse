import React from 'react';
import CreateTheChallenge from '../../components/createTheChallenge/CreateTheChallenge';
import { AroundTheWorldData } from '../../data/challenges/AroundTheWorldData';

const AdaptedForFilm = () => {

return(
    <div>
         <CreateTheChallenge challengeTitle={`Volta ao mundo em 12 livros`} listOfBooks={AroundTheWorldData}/>
    </div>

)
}
export default AdaptedForFilm;