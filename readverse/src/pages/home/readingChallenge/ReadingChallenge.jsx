import React from 'react';
import personReading from '../../../assets/icons/personReading.png'
import { Link } from 'react-router-dom';

const ReadingChallenge = () => {

    const anoAtual = new Date().getFullYear();

return(
    <div className='principal-div-readingChallenge'>
        <section className='readingChallenge-section-logo'>
            <p><strong>Participe de um desafio literário</strong></p>
        </section>

        <section>
            <ul className='readingChallenge-list'>
                <li className='challenge'><Link to='/thirtybeforethirty'>30 Livros antes dos 30</Link></li>
                <li className='challenge'><Link to='/aroundtheworld'>Volta ao mundo em 12 livros</Link></li>
                <li className='challenge'><Link to='/twelvebooksfor'>12 Livros para {anoAtual}</Link></li>
                <li className='challenge'><Link to='/adaptedforfilm'>10 Livros adaptados para o cinema</Link></li>
                <li className='challenge'><Link to='/alphabet'>1 Livro para cada letra do alfabeto</Link></li>
                <li className='challenge'><Link to='/fordecade'>1 Livro por década</Link></li>
            </ul>
        </section>
    </div>

)
}
export default ReadingChallenge;