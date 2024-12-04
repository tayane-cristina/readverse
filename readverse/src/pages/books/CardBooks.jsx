import React from 'react';

const CardBooks = ({title, author, description, rate, cover}) => {

return(
<div className='cardBooks'>
    <img src={cover} alt={`Imagem-de-${cover}`} className='book-cover'></img>
    <h2>{title}</h2>
    <p><strong>Por: </strong>{author}</p>
    <p>{description}</p>
    <p>{rate}</p>
</div>

)
}
export default CardBooks;