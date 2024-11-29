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