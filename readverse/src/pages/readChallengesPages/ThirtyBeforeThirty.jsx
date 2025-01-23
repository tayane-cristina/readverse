import React from 'react';
import CreateTheChallenge from '../../components/createTheChallenge/CreateTheChallenge';
import { ThirtyBeforeThirtyData } from '../../data/challenges/ThirtyBeforeThirtyData';

const AdaptedForFilm = () => {

return(
    <div>
         <CreateTheChallenge challengeTitle={`30 Livros para ler antes dos 30`} listOfBooks={ThirtyBeforeThirtyData}/>
    </div>

)
}
export default AdaptedForFilm;