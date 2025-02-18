import React from 'react';
import CreateTheChallenge from '../../components/createTheChallenge/CreateTheChallenge';
import { AroundTheWorldData } from '../../data/challenges/AroundTheWorldData';

const AroundTheWorld = () => {

return(
    <div>
        <CreateTheChallenge 
            challengeTitle={`Volta ao mundo em 12 livros`} 
            listOfBooks={AroundTheWorldData}
            introText={
                `Você ama livros e viagens? Então, esse desafio é para você! Vamos embarcar juntos nessa jornada literária ao redor do mundo, 
                lendo 12 livros ambientados em diferentes países! A cada leitura, teremos a chance de explorar novas culturas, conhecer diferentes 
                perspectivas e nos encantar com histórias de diversas partes do globo.
            `}    
            
        />
    </div>

)
}
export default AroundTheWorld;