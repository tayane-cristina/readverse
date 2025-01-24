import React from 'react';
import { Link } from 'react-router-dom';

const MenuQuiz = () => {

    const categories = [
        {
            link: "guessbookquiz",
            title: "Advinhe o livro",
        },
        {
            link: "romancefansquiz",
            title: "Fãs de romance",
        },
        {
            link: "adventurefansquiz",
            title: "Fãs de aventura",
        },
        {
            link: "fictionsfansquiz",
            title: "Fãs de ficção",
        },
        {
            link: "classicfansquiz",
            title: "Fãs dos clássicos",
        },
        {
            link: "horrorfansquiz",
            title: "Fãs de horror",
        },
    ]

return(
<div>
    <h2>Escolha um quiz de sua preferência</h2>

    <div className='div-container'>
        <main className='div-container-main'> 
            <ul className='div-container-ul-cards'>
                {categories.map((categorie, index) => (
                    <Link 
                        key={index} 
                        to={`/${categorie.link}`} 
                        className='card-container'
                    >
                        <p className='category-text'>{categorie.title}</p>
                    </Link>
                ))}
            </ul>
        </main>
    </div>
</div>

)
}
export default MenuQuiz;