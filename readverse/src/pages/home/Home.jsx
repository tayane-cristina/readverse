import React from 'react';
import './Home.css'
import logo from '../../assets/homepage-img-icons/logo.png'
import ReasonsToRead from './ReasonsToRead'
import escritor from '../../assets/homepage-img-icons/escritor.png'
import livro from '../../assets/homepage-img-icons/livro.png'
import ArticlesPreVision from '../articles/ArticlesPreVision';
import { Link } from 'react-router-dom';


const Home = () => {

return(
<div className='principal-div homepage'>

    <main>
        <section className='homepage-intro'>
            <p><strong>Bem-vindo ao <span className='special-word'>ReadVerse</span> sua biblioteca virtual!</strong></p>
            <img src={logo} alt='Icone' className='logo-img'></img>
        </section>

        <section className='homepage-quote'>
            {/*Deve ser uma função */}
            <p className='quote'>"O homem tem duas coisas a mais do que todos os outros seres: a liberdade e a responsabilidade. E é isso que o torna incomparavelmente mais elevado, mais profundo e mais terrível."</p>
            <p className='author-quote'>Fiódor Dostoiévski</p>
        </section>

        <section className='homepage-tip'>
           <ReasonsToRead />
        </section>

        <section className='homepage-selectRead'>
            <h3>Encontre sua próxima leitura através do nosso guia de obras ou autores.</h3>
            <div>
                <Link to='/books'><img className='icon-selectRead' src={livro} alt='icon-livro'></img></Link>
                <p>Em busca de uma leitura única? Navegue por nossa coleção de livros e descubra títulos que vão prender sua atenção e te acompanhar em novas jornadas.</p>
            </div>
            <div>
                <Link to='/authors'><img className='icon-selectRead' src={escritor} alt='icon-pessoa'></img></Link>
                <p>Se você já tem um autor preferido ou quer explorar novas referências, clique aqui e encontre livros organizados pelos melhores nomes da literatura.</p>
            </div>
        </section>

        <section className='homepage-articles'>
            <ArticlesPreVision />
            
        </section>
    </main>
</div>

)
}
export default Home;