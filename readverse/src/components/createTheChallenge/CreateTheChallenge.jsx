import React from 'react';

//Função chamada para exibir com os mesmos detalhes cada um dos desafios literários, sejam eles quais forem

const CreateTheChallenge = ({challengeTitle, listOfBooks}) => {

    return(
        <div>
            <p><strong>{challengeTitle}</strong></p>

            <ul>
                {listOfBooks.map((book, index) => (
                    <li  
                    key={index}
                    className={index % 2 === 0 ? "par" : "impar"}
                    >
                        <section>
                            <img src={book.cover} alt={book.title} style={{width: '150px', height: '230px'}}></img>
                        </section>
                        <section>
                            <p><strong>{book.title}</strong></p>
                            <p>{book.autor}</p>
                            <p>{book.description}</p>
                        </section>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default CreateTheChallenge;