import React from 'react';
import './Books.css'
import FecthBooksApi from './FetchBooksApi';

const Books = ({query, setQuery}) => {

return(
<div className='books-page'>
    <h2>Nossa Biblioteca</h2>

    <FecthBooksApi />

</div>

)
}
export default Books;