import React from 'react';
import { Link } from 'react-router-dom'; 

const Header = () => {


    return(
    <div>
        <h2><Link to='/'>ReadVerse</Link></h2>
        <Link to='/collection'>Conheça nossa coleção</Link>
    </div>
    )
}
export default Header;