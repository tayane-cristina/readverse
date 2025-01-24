import React from 'react';
import { Link } from 'react-router-dom'; 

const Header = () => {


    return(
    <div>
        <h2><Link to='/'>ReadVerse</Link></h2>

        <nav>
            <Link to='/collection'>Biblioteca Online</Link>
            <Link to="/authors">Autores</Link>
            <Link to="/menuquiz">Quiz</Link>
            <Link to="/about">Sobre</Link>
        </nav>
    </div>
    )
}
export default Header;