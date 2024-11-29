import React from 'react';
import './Books.css'
import FecthBooksApi from './FetchBooksApi';

const Books = () => {

return(
<div className='books-page'>
    <h2>Nossa Bibliotexca</h2>

    <form>
        <section className='search-form'>
            <input type='text' placeholder='Pesquisar'></input>
            <button>Buscar</button>
        </section>
        
        <p>Filtros</p>
        <section className='books-filter'>
            <select>
                <option value=''>Categoria</option>
                <option value='romance'>Romance</option>
                <option value='ficção'>Ficção</option>
                <option value='aventura'>Aventura</option>
                <option value='biografia'>Biografia</option>
            </select>

            <select>
                <option value=''>Nacionalidade</option>
                <option value='brasileiro'>Brasileiro</option>
                <option value='americano'>Americano</option>
                <option value='ingles'>Inglês</option>
                <option value='frances'>Francês</option>
            </select>
        </section>

        <FecthBooksApi />
        
    </form>

</div>

)
}
export default Books;