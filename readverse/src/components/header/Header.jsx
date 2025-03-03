import React from 'react';
import { Link } from 'react-router-dom'; 
import './Header.css'
import MenuLink from '../isActive/MenuLink';
import NightMode from '../isActive/NightMode';

const Header = ({toggleNightMode, isNightMode}) => {


    return(
    <div className='header'>

        <NightMode toggleNightMode={toggleNightMode} isNightMode={isNightMode} />

        <h2><Link to='/' className='logo'>ReadVerse</Link></h2>

        <nav>
            <MenuLink className="header-navlink" to="/" label="Home" />
            <MenuLink className="header-navlink" to='/collection' label="Biblioteca Online"/>
            <MenuLink className="header-navlink" to="/authors" label="Autores"/>
            <MenuLink className="header-navlink" to="/menuquiz" label="Quiz"/>
            <MenuLink className="header-navlink" to="/about" label="Sobre"/>
        </nav>

    </div>
    )
}
export default Header;