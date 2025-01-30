import React from 'react';
import { useState } from 'react';
import { Biography } from '../../../data/Biography';
import arrow from '../../../assets/icons/seta.png'
import './Carousel.css'

const Carousel = () => {

const [counter, setCounter] = useState(0)

const before = () => {

    if (counter <= 0) {
        setCounter(0)
    } else {
        setCounter((previousCounter) => previousCounter - 1)
    }
}

const next = () => {

    if (counter >= Biography.length - 1) {
        setCounter(0)
    } else {
        setCounter((prevCounter) => prevCounter + 1)
    }
}

return(
<div className='carousel div-container'>
    <p className='carousel-text-intro'>Prepare-se para mergulhar em um mundo de descobertas literárias. Bem-vindo ao <span className='orange'>Readverse</span>, onde histórias ganham vida!</p>
    <ul className='carousel-ul'>
        <img onClick={before} className='left-arrow' src={arrow} alt='left-arrow-icon'/>
        {Biography.slice(counter, counter + 1).map((autor, index) => (
            <li key={index} className='carousel-li'>
                <img className='carousel-image-author'
                    src={autor.image} 
                    alt={`${autor.nomeCompleto}-imagem`}
                    >
                </img> 
                
                <section className='carousel-section-details'>
                    <p><strong>{autor.nomeCompleto}</strong></p>
                    <p>{autor.dataDeNascimento}</p>
                    <p><strong>Obras mais populares:</strong></p>
                    <ul className='carousel-list-best-books'>
                        {autor.livrosMaisFamosos.map((livro, i) => (
                            <li key={i}>{livro}</li>
                        ))}
                    </ul>
                    <p><strong>Citações</strong></p>
                    <ul className='carousel-list-phases'>
                        {autor.frases.map((frase, i) => (
                            <li key={i}>"{frase}"</li>
                        ))}
                    </ul>
                    <br />
                    <p>{autor.contextoDasFrases}</p>
                </section>
            </li>
        ))}
        <img onClick={next} className='right-arrow' src={arrow} alt='left-arrow-icon'/>
    </ul> 
</div>

)
}
export default Carousel;