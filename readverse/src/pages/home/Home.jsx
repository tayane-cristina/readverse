import React from 'react';
import Carousel from './carousel/Carousel';
import BenefitsOfReading from '../ benefitsOfReading/BenefitsOfReading';
import ReadingChallenge from './readingChallenge/ReadingChallenge';
import BookReviews from './bookReviews/BookReviews';
import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {

return(
<div className='home'>
    <Carousel />
    <BenefitsOfReading />
    <ReadingChallenge />
    <BookReviews />
    <div className='quiz-way'>
        <Link to="/menuquiz">
            <span>Q</span>
            <span>U</span>
            <span>I</span>
            <span>Z</span>
            <span style={{color: 'white'}}>-</span>
            <span>G</span>
            <span>A</span>
            <span>M</span>
            <span>E</span>
        </Link>
    </div>
</div>

)
}
export default Home;