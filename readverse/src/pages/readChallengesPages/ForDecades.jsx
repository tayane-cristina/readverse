import React from 'react';
import CreateTheChallenge from '../../components/createTheChallenge/CreateTheChallenge';
import { ForDeacdesData } from '../../data/challenges/ForDecadesData';

const AdaptedForFilm = () => {

return(
    <div>
         <CreateTheChallenge challengeTitle={`1 Livro por década`} listOfBooks={ForDeacdesData}/>
    </div>

)
}
export default AdaptedForFilm;