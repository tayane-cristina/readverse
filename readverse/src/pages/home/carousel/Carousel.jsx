import React from 'react';
import { useState } from 'react';
import { Biography } from '../../../data/Biography';
import arrow from '../../../assets/icons/arrow.png'

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
<div className='carousel-div-container'>
    <ul className='carousel'>
        <button onClick={before}><img src={arrow} alt='left-arrow-icon' style={{transform: 'scaleX(-1)'}} /></button>
        {Biography.slice(counter, counter + 1).map((autor, index) => (
            <li key={index} className='carousel-infor'>
                {autor.image ? 
                <img className='image-autor'
                    src={autor.image} 
                    alt={`${autor.nomeCompleto}-imagem`}
                    ></img> 
                : 
                <img 
                    className='image-autor'
                    src='https://img.icons8.com/?size=80&id=ywULFSPkh4kI&format=png' 
                    alt={`${autor.nomeCompleto}-imagem`}
                    >
                </img>}
                
                <section className='carousel-details'>
                    <p><strong>{autor.nomeCompleto}</strong></p>
                    <p>{autor.dataDeNascimento}</p>
                    <p><strong>Obras mais populares:</strong></p>
                    <ul>
                        {autor.livrosMaisFamosos.map((livro, i) => (
                            <li key={i}>{livro}</li>
                        ))}
                    </ul>
                    <p><strong>Citações</strong></p>
                    <ul>
                        {autor.frases.map((frase, i) => (
                            <li key={i}>{frase}</li>
                        ))}
                    </ul>

                    <p>{autor.contextoDasFrases}</p>
                </section>
            </li>
        ))}
        <button onClick={next}><img src={arrow} alt='left-arrow-icon'/></button>
    </ul> 
</div>

)
}
export default Carousel;