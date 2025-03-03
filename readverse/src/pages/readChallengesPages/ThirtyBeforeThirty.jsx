import React from 'react';
import CreateTheChallenge from '../../components/createTheChallenge/CreateTheChallenge';
import { ThirtyBeforeThirtyData } from '../../data/challenges/ThirtyBeforeThirtyData';

const AdaptedForFilm = () => {

return(
    <div>
        <CreateTheChallenge 
            challengeTitle={`30 Livros para ler antes dos 30`} 
            listOfBooks={ThirtyBeforeThirtyData}
            introText={`Você ama livros e desafios? Então, esse desafio é para você!
                Vamos embarcar juntos nessa jornada literária, lendo 30 livros antes de completar 30 anos! Essa é a oportunidade perfeita para explorar novos gêneros, 
                descobrir clássicos e expandir seus horizontes literários antes de iniciar um novo ciclo da vida.
            `}  
            />
    </div>

)
}
export default AdaptedForFilm;