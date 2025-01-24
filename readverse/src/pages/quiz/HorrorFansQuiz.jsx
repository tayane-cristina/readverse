import React from 'react';
import { HorrorFans } from '../../data/booksQuiz/HorrorFans';
import QuestionsCard from '../../components/questionsCard/QuestionsCard';
import { useState } from 'react';

const HorrorFansQuiz = () => {

    const [quizTheme] = useState("Fãs de Horror")

return(
<div>
    <h2 className='category-title-h2'>Fãs de Horror</h2>

    <QuestionsCard  listQuestions={HorrorFans} quizTheme={quizTheme} sizeList={10}/>
</div>

)
}
export default HorrorFansQuiz;