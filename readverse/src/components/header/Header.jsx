import React from 'react';
import { AuthLinks, HeaderContainer, Nav, SearchForm, Title } from './HeaderStyles';
import { Link } from 'react-router-dom'

const Header = () => {

return(
<HeaderContainer>
    <Link to='/'><Title>Read Verse</Title></Link>

    <Nav>
        <Link to='/books'>Livros</Link>
        <Link to='/authors'>Autores</Link>
        <Link to='articles'>Matérias</Link>
    </Nav>

    <SearchForm>
        <input type='text' placeholder='Pesquisar'></input>
        <button>Buscar</button>
    </SearchForm>

    <AuthLinks>
        <a>Fazer login</a>
        <a>Criar cadastro</a>
    </AuthLinks>
    
</HeaderContainer>

)
}
export default Header;