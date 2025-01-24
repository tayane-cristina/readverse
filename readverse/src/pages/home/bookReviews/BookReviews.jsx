import React, { useState } from 'react';
import { ReviewsData } from '../../../data/reviews/ReviewsData';
import TextLimited from '../../../components/TextLimited';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const BookReviews = () => {

    const [startIndex, setStartIndex] = useState(0);
    const [finalIndex, setFinalIndex] = useState(4);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedReview, setSelectedReview] = useState(null);

    const openModal = (review) => {
        setIsModalOpen(true);
        setSelectedReview(review)
    }

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedReview(null)
    } 

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
                    <button onClick={() => openModal(review)}>Ler resenha</button>
                </li>
                
            ))}
        <button onClick={next}>Próximo</button>
        </ul>

        {selectedReview && (
            <Modal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            contentLabel="Resenha Completa"
            style={{
                content: {
                    top: '50%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    marginRight: '-50%',
                    transform: 'translate(-50%, -50%)',
                },
                overlay: {
                    backgroundColor: 'rgba(0, 0, 0, 0.75)',
                },
            }}
            >
                <h2>{selectedReview.title}</h2>
                <img src={selectedReview.cover} alt={`${selectedReview.title}-image`} className='review-book-cover'></img>
                <p><strong>Resenha Completa:</strong></p>
                <p>{selectedReview.reviewText}</p>
                <p><strong>Por quê ler este livro:</strong> {selectedReview.incentive}</p>
                <button onClick={closeModal}>Fechar</button>
            </Modal>
        )}
    </div>

)
}
export default BookReviews;