import React from 'react';
import { Link } from 'react-router-dom'; 
import './Header.css'

const Header = () => {


    return(
    <div className='header'>
        <h2><Link to='/' className='logo'>ReadVerse</Link></h2>

        <nav>
            <ul>
                <li><Link to='/collection'>Biblioteca Online</Link></li>
                <li><Link to="/authors">Autores</Link></li>
                <li><Link to="/menuquiz">Quiz</Link></li>
                <li><Link to="/about">Sobre</Link></li>
            </ul>
        </nav>
    </div>
    )
}
export default Header;