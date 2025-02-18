import React from 'react';
import { useState } from 'react';
import { AllBooksData } from '../../data/allBooksData/AllBooksData';
import './BenefitsOfReading.css';
import notbook from '../../assets/icons/not-book.png'

const BenefitsOfReading = () => {

    const [sortedBook, setSortedBook] = useState(null)

    const sortBook = () => {
        const numberSorted = Math.floor(Math.random() * (AllBooksData.length + 1))
        setSortedBook(numberSorted)
        console.log(sortedBook)
    }

    console.log(AllBooksData[5])

return(
    <div className='BenefitsOfReading div-container'>
        <ul className='benefits-list'>
            <li className='benefit-item impar-arg'>
                <p className='subtitle'><strong>Ler Estimula o Cérebro Como um Exercício</strong></p>
                <p className='benefit-text'>
                    Ler regularmente melhora a comunicatividade cerebral e fortalece habilidades como 
                    memória e foco, segundo estudos da Emory University. É um exercício poderoso para a mente.
                </p>
            </li>
            <li className='benefit-item par-arg'>
                <p className='subtitle'><strong>Leitura e o Relaxamento</strong></p>
                <p className='benefit-text'>
                    A leitura reduz o estresse em até 68%, conforme a Journal of Psychiatric Research. 
                    É uma forma simples e eficaz de relaxar e cuidar da saúde mental.
                </p>
            </li>
            <li className='benefit-item impar-arg'>
                <p className='subtitle'><strong>Ler Nos Torna Mais Empáticos.</strong></p>
                <p className='benefit-text'>
                    Ler histórias aumenta a empatia, pois nos conecta com as emoções dos personagens. Pesquisas 
                    mostram  que isso melhora as relações sociais e a compreensão do próximo.
                </p>
            </li>
        </ul>

        <div className='books-sorted-div'>
            <h2>Em dúvida sobre o que ler no momento? clique no botão abaixo e sorteie seu próximo livro!</h2>
            {sortedBook && AllBooksData[sortedBook] ? (
             <div className='book-sorted-display'>
                <p><strong>{AllBooksData[sortedBook].title}</strong></p>
                <p>Autor: {AllBooksData[sortedBook].autor}</p>
                <img
                className="book-sorted-cover"
                src={AllBooksData[sortedBook].cover}
                alt={`${AllBooksData[sortedBook].title}-image`}
                />
                <p className='book-sorted-description' ><strong>Descrição: </strong>{AllBooksData[sortedBook].description}</p>
                </div>
                ) : (
                <div className='not-book-sorted'>
                    <img className='not-book' src={notbook} alt='book-image'></img>
                </div>
            )}
            <button className='sort-btn' onClick={sortBook}>Sortear</button>
            </div>
            
    </div>
   

)
}
export default BenefitsOfReading;