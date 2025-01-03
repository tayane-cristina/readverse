import React from 'react';
import { useState } from 'react';
import axios from 'axios'

const Header = () => {

    const [search, setSearch] = useState("")
    const [books, setBooks] = useState([])
    const [loading, setLoading] = useState(false)

    console.log(search)

    const searchBooks = async (e) => {
        e.preventDefault()

        setLoading(true)

        try {
            const response = await axios.get(`https://openlibrary.org/search.json?q=${search}`)
            setBooks(response.data.docs)
            setLoading(false)
        } catch (error) {
            console.log("Erro ao buscar livro" + error)
            setLoading(false)
        }

        console.log("A função está sendo chamada")
        console.log(books)
    }

return(
<div>
    <h2>ReadVerse</h2>

    <form onSubmit={searchBooks}>
        <input 
        type='text'
        placeholder='Pesquisar por livro ou autor'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        />
        
        <button type='submit' >{loading ? <p>Carregando...</p> : <p>Buscar</p>}</button>
    </form>

    <ul>
        {books.length > 0 && books.map((book, index) => (
            <li key={index}>
                <p>{book.title}</p>
            </li>
        ))}
    </ul>
</div>

)
}
export default Header;