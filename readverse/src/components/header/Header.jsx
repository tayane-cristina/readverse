import React from 'react';
import { AuthLinks, HeaderContainer, Nav, SearchForm, Title } from './HeaderStyles';

const Header = () => {

return(
<HeaderContainer>
    <Title>Read Verse</Title>

    <Nav>
        <a>Livros</a>
        <a>Autores</a>
        <a>Matérias</a>
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