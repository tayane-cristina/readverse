import React from 'react';
import CreateTheChallenge from '../../components/createTheChallenge/CreateTheChallenge';
import { TwelveBooksForData } from '../../data/challenges/TwelveBooksForData';

const TwelveBooksFor = () => {

    const anoAtual = new Date().getFullYear();

return(
<div>
    <CreateTheChallenge challengeTitle={`12 Livros para ${anoAtual}`} listOfBooks={TwelveBooksForData}/>
</div>

)
}
export default TwelveBooksFor;