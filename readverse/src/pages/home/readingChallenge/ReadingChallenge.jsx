import React from 'react';
import { Link } from 'react-router-dom';
import './ReadingChallenge.css'
import  readingABook  from '../../../assets/icons/caminhante.png'


const ReadingChallenge = () => {

    const anoAtual = new Date().getFullYear();

return(
    <div className='readingChallenge div-container'>

        <section className='readingChallenge-section-logo'>
            <p><strong>Desafio Literário</strong></p>
        </section>

        <section className='readingChallenge-section'>
            <img className='challenge-icon' src={readingABook} alt='person-reading-a-book'></img>
            <ul className='readingChallenge-list'>
                <li className='impar color1'><Link className='challenge' to='/thirtybeforethirty'><p>30 Livros antes dos 30</p></Link></li>
                <li className='par color2'><Link className='challenge' to='/aroundtheworld'><p>Volta ao mundo em 12 livros</p></Link></li>
                <li className='impar color3'><Link className='challenge' to='/twelvebooksfor'><p>12 Livros para {anoAtual}</p></Link></li>
                <li className='par color4'><Link className='challenge' to='/adaptedforfilm'><p>10 Livros adaptados para o cinema</p></Link></li>
                <li className='impar color5'><Link className='challenge' to='/alphabet'><p>1 Livro para cada letra do alfabeto</p></Link></li>
                <li className='par color6'><Link className='challenge' to='/fordecade'><p>1 Livro por década</p></Link></li>
            </ul>
        </section>
    </div>

)
}
export default ReadingChallenge;