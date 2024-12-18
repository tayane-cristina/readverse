import styled from 'styled-components'

export const HeaderContainer = styled.div`
    display: flex;
    flex-directio: row;
    align-items: center;
    justify-content: space-around;
    width: 100vw;
    height: 3rem;
    background-color:  rgb(106, 7, 199);
    font-size: 20px;
    border-radius: 5px;
`;

export const Title = styled.h2`
    color: white;
    width: 50vw;
    text-align: center;
`;

export const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 35%;

    a {
        color: rgba(255, 255, 255, 0.808);
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
    width: 25%;

    a{
    color: white;
    font-weight: 300;
    text-decoration: underline;

    &:hover {
        color: black;
    }
    }


`;