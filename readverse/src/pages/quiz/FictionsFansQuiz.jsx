import React from 'react';
import { FictionsFans } from '../../data/booksQuiz/FictionsFans';
import QuestionsCard from '../../components/questionsCard/QuestionsCard';
import { useState } from 'react';

const FictionsFansQuiz = () => {

    const [quizTheme] = useState("Advinhe o livro")

return(
<div>
    <h2 className='category-title-h2'>Fãs de ficção</h2>

    <QuestionsCard  listQuestions={FictionsFans} quizTheme={quizTheme} sizeList={10}/>
</div>

)
}
export default FictionsFansQuiz;