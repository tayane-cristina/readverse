import styled from 'styled-components'

export const HeaderContainer = styled.div`
    display: flex;
    flex-directio: row;
    align-items: center;
    justify-content: space-around;
    width: 100vw;
    background-color: pink;
    font-size: 19px;
    border-radius: 5px;
`;

export const Title = styled.h2`

`;

export const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 15%;

    a {
        color: black;
        transition: 0.2s;

        &:hover{
            color: gray;
        }
    }
    
`;

export const SearchForm = styled.form`
    display: flex;
    flex-direction-row;
    justify-content: space-around;
    width: 40%;

    input{
        width: 85%;
        padding: 10px;
        border-radius: 5px;
        border: none;
    }

    button{
        width: 10%
        cursor: pointer;
        border-radius: 5px;
        padding: 10px;
        transition: 0.2s;
        font-weight: bold;

    }

    button:hover {
        background-color: gray;
        color: white
    }

`;

export const AuthLinks = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 15%;

    a{
    color: gray;
    text-decoration: underline;

    &:hover {
        color: black;
    }
    }


`;