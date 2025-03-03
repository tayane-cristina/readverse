import React from 'react';
import './createTheChallenge.css'

//Função chamada para exibir com os mesmos detalhes cada um dos desafios literários, sejam eles quais forem

const CreateTheChallenge = ({challengeTitle, listOfBooks, introText}) => {

    return(
        <div className='create-challenge div-container'>
            <section className='invitation-to-challenge'>
                <h2>Desafio de Leitura: {challengeTitle}</h2>
                <p>{introText}</p>
            </section>

            <ul className='create-challenge-list'>
                {listOfBooks.map((book, index) => (
                    <li  
                    key={index}
                    className={`${index % 2 === 0 ? "par-challenge" : "impar-challenge"} create-challenge-item`}
                    >
                        <section className='create-challenge-section-cover'>
                            <img className='book-challenge-cover' src={book.cover} alt={book.title} style={{width: '150px', height: '230px'}}></img>
                        </section>
                        <section className='create-challenge-infor'>
                            <p><strong>{book.title}</strong></p>
                            <p>{book.autor}</p>
                            <p>{book.description}</p>
                            {console.log(index)}
                        </section>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default CreateTheChallenge;