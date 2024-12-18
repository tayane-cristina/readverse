import React from 'react';
import { articlesData } from '../../data/articlesData';
import './Articles.css'
import { useState } from 'react';

const Articles = () => {

    const [count, setCount] = useState(3)
    const [startPoint, setStartPoint] = useState(0)

    const nextCard = () => {
        setCount(count < 6 ? count + 1 : 6)
        setStartPoint(startPoint < 3 ? startPoint + 1 : 3)
    }

    const previousCard = () => {
        setCount(count > 3 ? count - 1 : 3)
        setStartPoint(startPoint > 0 ? startPoint - 1 : 0)
    }

    console.log("Contador: " + count)
    console.log("Ponto de partida: " + startPoint)

return(
<div>
    <h2>Máterias</h2>

    <div className='card-movel'>
        <button onClick={previousCard}><img src='' alt='arrow-right'></img></button>
        {articlesData.slice(startPoint, count).map((art, index) => (
            <li className='cardMovel-card' key={index}>
                <p>{art.title}</p>
            </li>
        ))}
        <button onClick={nextCard}><img src='' alt='arrow-right'></img></button>
    </div>
</div>

)
}
export default Articles;