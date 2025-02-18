import React from 'react';
import BenefitsOfReading from '../ benefitsOfReading/BenefitsOfReading';
import ReadingChallenge from './readingChallenge/ReadingChallenge';
import BookReviews from './bookReviews/BookReviews';
import { Link } from 'react-router-dom';
import './Home.css'
import HomeIntroduce from './homeIntroduce/HomeIntroduce';


const Home = ({isNightMode, toggleNightMode}) => {

return(
<div className='home'>

    <HomeIntroduce />
    <BenefitsOfReading />
  {/*
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
  */}  
    
</div>

)
}
export default Home;