import React from 'react';
import Carousel from './carousel/Carousel';
import BenefitsOfReading from '../ benefitsOfReading/BenefitsOfReading';
import ReadingChallenge from './readingChallenge/ReadingChallenge';
import BookReviews from './bookReviews/BookReviews';



const Home = () => {

return(
<div>
    <h2>Home</h2>

    <Carousel />
    <BenefitsOfReading />
    <ReadingChallenge />
    <BookReviews />
    
</div>

)
}
export default Home;