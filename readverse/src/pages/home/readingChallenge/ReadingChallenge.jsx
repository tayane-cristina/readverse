import React from 'react';
import { Link } from 'react-router-dom';
import './ReadingChallenge.css'
import  readingABook  from '../../../assets/icons/reading-a-book.png'


const ReadingChallenge = () => {

    const anoAtual = new Date().getFullYear();

return(
    <div className='readingChallenge div-container'>

        <section className='readingChallenge-section-logo'>
            <p><strong>Desafio Literário</strong></p>
        </section>

        <section className='readingChallenge-section-lists'>
            <ul className='readingChallenge-primary-list'>
                <li className='impar color1'><Link className='challenge' to='/thirtybeforethirty'>30 Livros antes dos 30</Link></li>
                <li className='par color2'><Link className='challenge' to='/aroundtheworld'>Volta ao mundo em 12 livros</Link></li>
                <li className='impar color3'><Link className='challenge' to='/twelvebooksfor'>12 Livros para {anoAtual}</Link></li>
            </ul>
            <img src={readingABook} alt='person-reading-a-book'></img>
            <ul className='readingChallenge-second-list'>
                <li className='par color4'><Link className='challenge' to='/adaptedforfilm'>10 Livros adaptados para o cinema</Link></li>
                <li className='impar color5'><Link className='challenge' to='/alphabet'>1 Livro para cada letra do alfabeto</Link></li>
                <li className='par color6'><Link className='challenge' to='/fordecade'>1 Livro por década</Link></li>
            </ul>
        </section>
    </div>

)
}
export default ReadingChallenge;