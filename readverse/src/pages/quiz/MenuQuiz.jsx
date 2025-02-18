import React from 'react';
import { Link } from 'react-router-dom';
import './Quiz.css';
import advinheOLivro from '../../assets/icons/advinhe-o-livro.png';
import fasDeRomance from '../../assets/icons/fas-de-romance.png';
import fasDeAventura from '../../assets/icons/fas-de-aventura.png';
import fasDeFiccao from '../../assets/icons/fas-de-ficcao.png';
import fasDeClassico from '../../assets/icons/fas-de-classicos.png';
import fasDeHorror from '../../assets/icons/fas-de-horror.png';


const MenuQuiz = () => {

    const categories = [
        {
            link: "guessbookquiz",
            title: "Advinhe o livro",
            image: advinheOLivro
        },
        {
            link: "romancefansquiz",
            title: "Fãs de romance",
            image: fasDeRomance
        },
        {
            link: "adventurefansquiz",
            title: "Fãs de aventura",
            image: fasDeAventura
        },
        {
            link: "fictionsfansquiz",
            title: "Fãs de ficção",
            image: fasDeFiccao
        },
        {
            link: "classicfansquiz",
            title: "Fãs dos clássicos",
            image: fasDeClassico
        },
        {
            link: "horrorfansquiz",
            title: "Fãs de horror",
            image: fasDeHorror
        },
    ]

return(
<div className='quiz div-container'>
    <section>
        <h2>Escolha um quiz</h2>
        <p>
            Se você gosta de boas histórias, personagens inesquecíveis e mundos fascinantes, este quiz é para você. 
            Responda perguntas sobre literatura, descubra curiosidades e aproveite o momento sem pressa. Faça o quiz e 
            veja quais livros combinam mais com você!
        </p>
    </section>

    <ul className='quiz-ul-cards'>
        {categories.map((categorie, index) => (
            <li 
            key={index} 
            className='card-item'
            >
                <Link 
                    className='link-quiz'
                    to={`/${categorie.link}`} 
                >
                    <img className='categorie-quiz-icon' src={categorie.image} alt={`icone-de-${categorie.title}`}></img>
                    <p className='category-text'>{categorie.title}</p>
                </Link>
            </li>

        ))}
    </ul>
</div>

)
}
export default MenuQuiz;