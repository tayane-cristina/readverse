import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import './Collection.css';
import noImage from '../assets/bookCovers/indisponivel.png';

const Collection = () => {

    const [query, setQuery] = (useState(''));
    const [bookList, setBookList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [numbersOfResult, setNumbersOfResult] = useState(20)

    const API_KEY = 'AIzaSyCKY4nrujns1vnPZ7LwpPBOXpmgN5lXcJQ';

    const fetchBooks = async (searchQuery) => {

        setLoading(true)

        try {
            const response = await axios.get(
                `https://www.googleapis.com/books/v1/volumes`,
                {
                    params: {
                        q: query || "mais vendidos",
                        key: API_KEY,
                        maxResults: numbersOfResult,
                        startIndex: 30,
                    },
                }
            )
            setError("")
            setBookList(response.data.items || [])
            setLoading(false)
        } catch (error) {
            console.log(error)
            setError("Erro ao buscar dados")
        }
    }

    const seeMore = () => {
        setNumbersOfResult((prevNumbersOfResults) => prevNumbersOfResults + 10);
        fetchBooks()
    }

    useEffect(() => {
        fetchBooks()
    }, [])


    return(
    <div className='collection'>
        <div className='collection-search-section'>
            <select className='collection-header' name="literaryGenres" id="literaryGenres" onChange={(e) => setQuery(e.target.value)}>
                <option value="">Selecione um estilo literário</option>
                <option value="romance">Romance</option>
                <option value="ficcao">Ficção Científica</option>
                <option value="fantasia">Fantasia</option>
                <option value="suspense">Suspense</option>
                <option value="terror">Terror</option>
                <option value="biografia">Biografia</option>
                <option value="autobiografia">Autobiografia</option>
                <option value="historico">Histórico</option>
                <option value="poesia">Poesia</option>
                <option value="drama">Drama</option>
                <option value="autoajuda">Autoajuda</option>
                <option value="aventura">Aventura</option>
                <option value="infantil">Infantil</option>
                <option value="jovemAdulto">Jovem Adulto</option>
                <option value="religioso">Religioso</option>
            </select>

            <input
                type="text"
                placeholder="Digite o título ou autor"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />

            <button onClick={() => fetchBooks(query)}>Buscar</button>
        </div>


        <ul className='list-of-books'>
            {bookList.map((book, index) => (
                <li key={index}>
                    {book.volumeInfo.imageLinks?.thumbnail ? (
                        <img
                            src={book.volumeInfo.imageLinks.thumbnail}
                            alt={`Capa do livro ${book.volumeInfo.title}`}
                            style={{ width: "100px", height: "auto" }}
                        />
                        ) : (
                        <img  
                         src={noImage} 
                         alt='icone-sem-imagem-disponivel' 
                         style={{ width: "100px", height: "auto" }}
                        />
                        )}
                    <p><strong>{book.volumeInfo.title}</strong></p>
                    <p><strong>Publicado em:</strong> {(book.volumeInfo.publishedDate)}</p>
                    <p><strong>Autor:</strong> {book.volumeInfo.authors?.join(", ")}</p>
                    <p><strong>Editora:</strong> {book.volumeInfo.publisher}</p>
                </li>
            ))}
        </ul>
            <button className='seeMore-btn' onClick={seeMore}>Ver mais</button>
        
    </div>
    )
}
export default Collection;