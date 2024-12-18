import React from 'react';

const CardBooks = ({title, author, description, rate, cover}) => {

return(
<div className='cardBooks'>
    <img src={cover} alt={`Imagem de ${title} capa`} className='book-cover'></img>
    <h2>{title}</h2>
    <p>{author}</p>
    <p>{description}</p>
    <p>{rate}</p>
</div>

)
}
export default CardBooks;