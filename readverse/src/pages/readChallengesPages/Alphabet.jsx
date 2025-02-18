import React from 'react';
import CreateTheChallenge from '../../components/createTheChallenge/CreateTheChallenge';
import { AlphabetData } from '../../data/challenges/AlphabetData';

const Alphabet = () => {

return(
    <div>
         <CreateTheChallenge 
            challengeTitle={`1 Livros para cada letra do alfabeto`} 
            listOfBooks={AlphabetData} 
            introText={
                `Você ama livros e desafios? Então, esse desafio é para você!
                Vamos embarcar juntos nessa jornada literária, lendo 26 livros, um para cada letra do alfabeto! Escolhemos livros cujos títulos 
                comecem com cada uma das 26 letras do alfabeto, você pode ler no seu ritmo. `
            }/>
    </div>

)
}
export default Alphabet;