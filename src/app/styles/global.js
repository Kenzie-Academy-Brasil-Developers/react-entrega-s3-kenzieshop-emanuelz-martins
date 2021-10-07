const { createGlobalStyle } = require('styled-components');

const GlobalStyle = createGlobalStyle`
    html, body, nav, ul, li {
        margin: 0;
        padding: 0;
        font-family: Arial, Helvetica, sans-serif;
        box-sizing: border-box;
    }

    ul, ol, li {
        list-style: none;
    }

    h1, h2, h3 {
        margin: 0;
        padding: 0;
    }

    :root {
        --darkest-color: #261820;
        --purple-color: #402835;
        --ligth-color: #735565;
        --gray-color: #A69C9C;
        --light-color: #D9D2D3;
    }
`;

export default GlobalStyle;
