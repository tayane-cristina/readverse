import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import CardBooks from './CardBooks';

const FecthBooksApi = () => {

    const [query, setQuery] = useState("");
    const [books, setBooks] = useState([]);
    const [error, setError] = useState(null)

    const API_KEY = "AIzaSyCKY4nrujns1vnPZ7LwpPBOXpmgN5lXcJQ";

    useEffect(() => {

        const fetchBooks = async () => {
            try {
            const response = await axios.get('https://www.googleapis.com/books/v1/volumes', {
                params: {
                    q: 't',
                    orderBy: 'relevance',
                    maxResults: 40,
                },
            });

            //Ordenar os livros em ordem alfabética pelo título
            const sortedBook = response.data.items.sort((a, b) => 
                a.volumeInfo.title.localeCompare(b.volumeInfo.title)
            );

            setBooks(sortedBook);
            } catch (error) {
                setError("Erro ao buscar livros")
            };
        } 

        fetchBooks()
    }, [])

    const fetchBooksQuery = async () => {
                
        try {
            const response = await axios.get(`https://www.googleapis.com/books/v1/volumes`,
                {
                    params: {
                        q: query,
                        startIndex: 10,
                        maxResults: 10,
                        key: API_KEY,
                    },
            }
        );
            setBooks(response.data.items || [])
        } catch (error) {
            console.log(error)
        }
    };
    
return(
    <div>
        <form>
            <section className='search-form'>
                <input 
                    type='text' 
                    placeholder='Pesquisar livro'
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                >
                </input>
                <button onClick={(e) => {
                    e.preventDefault()
                    fetchBooksQuery();
                }}>
                    Buscar
                </button>
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
        </form>

        <h2>Lista de livros</h2>

        {query.length > 0 ? (
             <ul className='cardBooks-content'>
                {books.map((book, index) => (
                    <li key={index} className='cardBooks'>
                        <CardBooks title={book.volumeInfo.title} author={book.volumeInfo.authors?.join(', ')} cover={book.volumeInfo.imageLinks?.thumbnail}/>
                    </li>
                ))}
                {console.log(books)}
            </ul>
        ) : (
            <ul className='cardBooks-content'>
                {books.map((book, index) => (
                    <li key={index} className='cardBooks'>
                        <CardBooks title={book.volumeInfo.title}/>
                    </li>
                ))}
                {console.log(books)}
            </ul>
        )}

        
    </div>

)
}
export default FecthBooksApi;