import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import CardBooks from './CardBooks';

const FecthBooksApi = () => {

    const [query, setQuery] = useState("");
    const [books, setBooks] = useState([]);
    const [error, setError] = useState(null)
    const [maxresults, setMaxResults] = useState(12)

    const API_KEY = "AIzaSyCKY4nrujns1vnPZ7LwpPBOXpmgN5lXcJQ";

    useEffect(() => {

        const fetchBooks = async () => {
            try {
            const response = await axios.get('https://www.googleapis.com/books/v1/volumes', {
                params: {
                    q: 't',
                    orderBy: 'relevance',
                    maxResults: maxresults,
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
    }, [maxresults])

    const fetchBooksQuery = async () => {
                
        try {
            const response = await axios.get(`https://www.googleapis.com/books/v1/volumes`,
                {
                    params: {
                        q: query,
                        startIndex: 10,
                        maxResults: maxresults,
                        key: API_KEY,
                    },
            }
        );
            setBooks(response.data.items || [])
        } catch (error) {
            console.log(error)
        }
    };

    const seeMore = () => {
        setMaxResults((prevState) => prevState + 12)
        console.log(maxresults)
    }
    
    
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
        
            
            <section className='books-filter'>
            <p><strong>Filtros:</strong></p>
                <select className='select-category'>
                    <option value=''>Categoria</option>
                    <option value='romance'>Romance</option>
                    <option value='ficção'>Ficção</option>
                    <option value='aventura'>Aventura</option>
                    <option value='biografia'>Biografia</option>
                </select>

                <select className='select-category'>
                    <option value=''>Nacionalidade</option>
                    <option value='brasileiro'>Brasileiro</option>
                    <option value='americano'>Americano</option>
                    <option value='ingles'>Inglês</option>
                    <option value='frances'>Francês</option>
                </select>
            </section>
        </form>

        <h2>Lista de livros</h2>

        {query.length >= 0 ? (
            <div>
                <ul className='cardBooks-content'>
                    {books.map((book, index) => (
                        <li key={index} className='cardBooks-li'>
                            <CardBooks title={book.volumeInfo.title} author={book.volumeInfo.authors?.join(',')} cover={book.volumeInfo.imageLinks?.thumbnail}/>
                        </li>
                    ))}
                </ul>
                <button className='see-more' onClick={seeMore}>Ver mais...</button>
            </div>
             
        ) : (
            <ul className='cardBooks-content'>
                {books.map((book, index) => (
                    <li key={index} className='cardBooks'>
                        <CardBooks title={book.volumeInfo.title}/>
                    </li>
                ))}
            </ul>
        )}

        
    </div>

)
}
export default FecthBooksApi;