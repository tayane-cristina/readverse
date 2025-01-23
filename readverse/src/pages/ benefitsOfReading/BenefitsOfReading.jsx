import React from 'react';
import { useState } from 'react';
import { AllBooksData } from '../../data/allBooksData/AllBooksData';

const BenefitsOfReading = () => {

    const [sortedBook, setSortedBook] = useState(null)

    const sortBook = () => {
        const numberSorted = Math.floor(Math.random() * (AllBooksData.length + 1))
        setSortedBook(numberSorted)
        console.log(sortedBook)
    }

    console.log(AllBooksData[5])

return(
    <div className='principal-div-BenefitsOfReading'>
        <ul className='benefits-list'>
            <li className='benefit-item'>
                <p><strong>Ler Estimula o Cérebro Como um Exercício</strong></p>
            </li>
            <li className='benefit-item'>
                <p><strong>Ler Ficcional Aumenta a Empatia</strong></p>
            </li>
            <li className='benefit-item'>
                <p><strong>Ler Antes de Dormir Pode Melhorar a Qualidade do Sono</strong></p>
            </li>
            <li className='benefit-item'>
                <p><strong>A Leitura Reduz os Riscos de Declínio Cognitivo</strong></p>
            </li>
        </ul>

        <div className='books-sorted-div'>
            <p><strong>Em dúvida sobre o que ler no momento? clique no botão abaixo e sorteie seu próximo livro!</strong></p>
            <button onClick={sortBook}>Sortear</button>
            {sortedBook && AllBooksData[sortedBook] ? (
             <div className='book-sorted-display'>
                <p><strong>{AllBooksData[sortedBook].title}</strong></p>
                <p>Autor: {AllBooksData[sortedBook].autor}</p>
                <img
                className="book-sorted-cover"
                src={AllBooksData[sortedBook].cover}
                alt={`${AllBooksData[sortedBook].title}-image`}
                />
                <p>{AllBooksData[sortedBook].description}</p>
                </div>
                ) : (
                <div>
                    <p>Nenhum livro sorteado</p>
                </div>
            )}
            </div>
        
    </div>
   

)
}
export default BenefitsOfReading;