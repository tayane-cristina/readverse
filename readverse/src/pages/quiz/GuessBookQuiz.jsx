import React from 'react';
import { GuessBook } from '../../data/booksQuiz/GuessBook';
import QuestionsCard from '../../components/questionsCard/QuestionsCard';
import { useState } from 'react';

const GuessBookQuiz = () => {

    const [quizTheme] = useState("Advinhe o livro")

return(
<div>
    <h2 className='category-title-h2'>Adivinhe o livro</h2>

    <QuestionsCard  listQuestions={GuessBook} quizTheme={quizTheme} sizeList={10}/>
</div>

)
}
export default GuessBookQuiz;