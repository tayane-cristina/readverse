import React from 'react';
import CreateTheChallenge from '../../components/createTheChallenge/CreateTheChallenge';
import { TwelveBooksForData } from '../../data/challenges/TwelveBooksForData';

const TwelveBooksFor = () => {

    const anoAtual = new Date().getFullYear();

return(
<div>
    <CreateTheChallenge 
        challengeTitle={`12 Livros para ${anoAtual}`} 
        listOfBooks={TwelveBooksForData}
        introText={`Você ama livros e desafios? Então, esse desafio é para você!
            Vamos embarcar juntos nessa jornada literária, lendo 12 livros ao longo do ano! Essa é a oportunidade perfeita para explorar novos gêneros, 
            descobrir clássicos e manter uma rotina de leitura consistente durante todo o ano.
        `}
        />
</div>

)
}
export default TwelveBooksFor;