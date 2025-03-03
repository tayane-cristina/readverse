import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${(props) => props.theme.background};
        color: ${(props) => props.theme.text};
        transition: background-color 0.3s, color 0.3s;
        font-family: Arial, sans-serif;
  }
`
export default GlobalStyle;