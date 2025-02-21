import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        scrollbar-width: auto;
        scrollbar-color: #636363 transparent;
    }
    /* Chrome, Edge, and Safari */
    *::-webkit-scrollbar {
    width: 7px;
    }

    *::-webkit-scrollbar-track {
    background: transparent;
    }

    *::-webkit-scrollbar-thumb {
        background-color: #636363;
        border-radius: 10px;
        border: 0px none #ffffff;
    }

    body{
        min-width: 400px;
        display: flex;
        flex-direction: column;
       
    }
`;


export { GlobalStyle }