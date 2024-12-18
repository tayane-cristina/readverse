import React from 'react';
import { AuthLinks, HeaderContainer, Nav, Title } from './HeaderStyles';
import { Link } from 'react-router-dom'

const Header = () => {

return(
<HeaderContainer>
    <Link to='/'><Title>ReadVerse</Title></Link>

    <Nav>
        <Link to='/books'>Livros</Link>
        <Link to='/authors'>Autores</Link>
        <Link to='articles'>Matérias</Link>
        <Link to='about'>Sobre</Link>
    </Nav>

    <AuthLinks>
        <a>Fazer login</a>
        <a>Criar cadastro</a>
    </AuthLinks>
    
</HeaderContainer>

)
}
export default Header;