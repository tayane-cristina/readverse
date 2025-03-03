import React from 'react';
import { AdventureFans } from '../../data/booksQuiz/AdventureFans';
import QuestionsCard from '../../components/questionsCard/QuestionsCard';
import { useState } from 'react';

const AdventureFansQuiz = () => {

    const [quizTheme] = useState("Advinhe o livro")

return(
<div>
    <h2 className='category-title-h2'>Adivinhe o livro</h2>

    <QuestionsCard  listQuestions={AdventureFans} quizTheme={quizTheme} sizeList={10}/>
</div>

)
}
export default AdventureFansQuiz;