import React from 'react';
import { RomanceFans } from '../../data/booksQuiz/RomanceFans';
import QuestionsCard from '../../components/questionsCard/QuestionsCard';
import { useState } from 'react';

const RomanceFansQuiz = () => {

    const [quizTheme] = useState("Fãs de Romance")

return(
<div>
    <h2 className='category-title-h2'>Adivinhe o livro</h2>

    <QuestionsCard  listQuestions={RomanceFans} quizTheme={quizTheme} sizeList={10}/>
</div>

)
}
export default RomanceFansQuiz;