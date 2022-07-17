import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    
    *{
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing:border-box;
        font-family: 'Open Sans';
        font-size: 18px;
    }
    #root{
        margin:0 auto;
    }
    a{
        text-decoration: none;
    }
 `;
export default GlobalStyle;
