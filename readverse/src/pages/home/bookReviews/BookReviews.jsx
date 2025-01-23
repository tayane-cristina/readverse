import React, { useState } from 'react';
import { ReviewsData } from '../../../data/reviews/ReviewsData';
import TextLimited from '../../../components/TextLimited'

const BookReviews = () => {

    const [startIndex, setStartIndex] = useState(0);
    const [finalIndex, setFinalIndex] = useState(4);

    const next = () => {
        if (startIndex > ReviewsData.length - 5) {
            setStartIndex(0)
            setFinalIndex(4)
            
        } else {
            setStartIndex(startIndex + 1)
            setFinalIndex(finalIndex + 1)
        }
        
    }

    const prev = () => {

        if (startIndex === 0) {
            setStartIndex(0)
            setFinalIndex(4)
        } else {
            setStartIndex(startIndex - 1)
            setFinalIndex(finalIndex - 1)
        }
    }

//parei na hora de fazer o carroceu, de tês itens por vez das resenhas

return(
    <div className='bookReviews-principal-div'>
        <p><strong>Fique por dentro das nossas resenhas literárias</strong></p>

        <ul className='reviews-ul'>
        <button onClick={prev}>Anterior</button>
            {ReviewsData.slice(startIndex, finalIndex).map((review, index) => (
                <li key={index}>
                    <img src={review.cover} alt={`${review.title}-image`} className='review-book-cover'></img>
                    <p><strong>{review.title}</strong></p>
                    <TextLimited text={review.reviewText} limit={200}/>
                    <p><strong>Por quê ler este livro:</strong> {review.incentive}</p>
                </li>
                
            ))}
        <button onClick={next}>Próximo</button>
        </ul>
    </div>

)
}
export default BookReviews;