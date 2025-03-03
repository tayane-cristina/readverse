import React from 'react';
import { ClassicFans } from '../../data/booksQuiz/ClassicFans';
import QuestionsCard from '../../components/questionsCard/QuestionsCard';
import { useState } from 'react';

const ClassicFansQuiz = () => {

    const [quizTheme] = useState("Fãs dos Clássicos")

return(
<div>
    <h2 className='category-title-h2'>Fãs dos Clássicos</h2>

    <QuestionsCard  listQuestions={ClassicFans} quizTheme={quizTheme} sizeList={10}/>
</div>

)
}
export default ClassicFansQuiz;