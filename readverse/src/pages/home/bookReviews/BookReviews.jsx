import React, { useState } from 'react';
import { ReviewsData } from '../../../data/reviews/ReviewsData';
import TextLimited from '../../../components/TextLimited';
import Modal from 'react-modal';
import './BookReviews.css';
import arrow from '../../../assets/icons/seta.png'

Modal.setAppElement('#root');

const BookReviews = () => {

    const [startIndex, setStartIndex] = useState(0);
    const [finalIndex, setFinalIndex] = useState(3);
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
            setFinalIndex(3)
            
        } else {
            setStartIndex(startIndex + 1)
            setFinalIndex(finalIndex + 1)
        }
        
    }

    const prev = () => {

        if (startIndex === 0) {
            setStartIndex(0)
            setFinalIndex(3)
        } else {
            setStartIndex(startIndex - 1)
            setFinalIndex(finalIndex - 1)
        }
    }

//parei na hora de fazer o carroceu, de tês itens por vez das resenhas

return(
    <div className='bookReviews div-container'>

        <p className='book-reviews-title'><strong>Fique por dentro das nossas resenhas literárias</strong></p>

        <ul className='reviews-ul'>
            <img onClick={prev} className='left-arrow' src={arrow} alt='left-arrow-icon'></img>
                {ReviewsData.slice(startIndex, finalIndex).map((review, index) => (
                    <li key={index} className='review-li'>
                        <img src={review.cover} alt={`${review.title}-image`} className='review-book-cover'></img>
                        <p className='review-title'><strong>{review.title}</strong></p>
                        <TextLimited text={review.reviewText} limit={150}/>
                        <button className='simply-btn' onClick={() => openModal(review)}>Ler resenha</button>
                    </li>
                    
                ))}
            <img onClick={next} className='right-arrow' src={arrow} alt='right-arrow-icon'></img>
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
                    width: '70%',
                    height: '80%',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    transform: 'translate(-50%, -50%)',
                },
                overlay: {
                    backgroundColor: 'rgba(0, 0, 0, 0.75)',
                },
            }}
            >
                <section className='review-modal-cover'>
                    <h2>{selectedReview.title}</h2>
                    <img src={selectedReview.cover} alt={`${selectedReview.title}-image`} className='review-book-cover'></img>
                </section>
                <section className='review-modal-infor'>
                    <p><strong>Resenha Completa:</strong></p>
                    <p>{selectedReview.reviewText}</p>
                    <p><strong>Por quê ler este livro:</strong> {selectedReview.incentive}</p>
                    <button className='simply-btn' onClick={closeModal}>Fechar</button>
                </section>
            </Modal>
        )}
    </div>

)
}
export default BookReviews;