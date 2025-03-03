import React from 'react';
import CreateTheChallenge from '../../components/createTheChallenge/CreateTheChallenge';
import { ForDeacdesData } from '../../data/challenges/ForDecadesData';

const AdaptedForFilm = () => {

return(
    <div>
        <CreateTheChallenge 
            challengeTitle={`As últimas 3 décadas`} 
            listOfBooks={ForDeacdesData}
            introText={`Você ama livros e história? Então, esse desafio é para você!]
                Vamos embarcar juntos nessa jornada literária através do tempo, lendo 16 livros que marcaram as últimas três décadas! A cada leitura, teremos a chance 
                de explorar diferentes contextos históricos, estilos literários e transformações culturais recentes. 
            `}
            />
    </div>

)
}
export default AdaptedForFilm;