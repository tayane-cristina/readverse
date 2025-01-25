import React from 'react';
import Carousel from './carousel/Carousel';
import BenefitsOfReading from '../ benefitsOfReading/BenefitsOfReading';
import ReadingChallenge from './readingChallenge/ReadingChallenge';
import BookReviews from './bookReviews/BookReviews';
import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {

return(
<div className='principal-div home'>
    <Carousel />
    <BenefitsOfReading />
    <ReadingChallenge />
    <BookReviews />

    <Link to="/menuquiz">QUIZ</Link>
    
</div>

)
}
export default Home;