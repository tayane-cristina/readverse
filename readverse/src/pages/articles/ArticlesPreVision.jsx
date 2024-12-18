import React from 'react';
import { Link } from 'react-router-dom';
import livroOnline from '../../assets/homepage-img-icons/livroOnline.jpg'

const ArticlesPreVision = () => {

    const articles = [
        {
            image: livroOnline,
            title: "O Impacto da Literatura Digital na Leitura Contemporânea",
            text: "Nos últimos anos, os livros digitais e audiobooks ganharam enorme popularidade, proporcionando aos leitores mais flexibilidade e acessibilidade. Plataformas como...",

        },

        {
            image: "",
            title: "A Ascensão dos Autores Independentes e o Futuro da Publicação Literária",
            text: "Com o avanço das plataformas de autopublicação, como Amazon Kindle Direct Publishing (KDP) e Wattpad, muitos autores têm encontrado uma nova forma de compartilhar...",
            
        },

        {
            image: "",
            title: "A Influência da Literatura Infantil na Formação de Leitores Críticos",
            text: "A literatura infantil desempenha um papel crucial na formação de leitores críticos e cidadãos conscientes. Livros infantojuvenis não só estimulam a imaginação e o...",

        },

        {
            image: "",
            title: "A Literatura Brasileira Ganha Força no Mercado Internacional com Novos Autores",
            text: "Nos últimos anos, a literatura brasileira tem conquistado cada vez mais espaço no mercado literário internacional. Autores contemporâneos como Geovani Martins...",

        }
    ]

return(
    articles.map((art, index) => (
        <div className='articlePreview'>
            <img className='article-capa' src={art.image} alt="imagem-de-leitura"></img>
            <p><strong>{art.title}</strong></p>
            <p>{art.text}</p>
            <Link to='/articles'>Ver mais</Link>
        </div>
    ))
)
}
export default ArticlesPreVision;