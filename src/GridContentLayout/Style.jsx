import { styled } from "styled-components";

export const Style = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(25%,1fr));
    gap: 1.3rem;
    
    @media screen and (max-width:750px) {
        grid-template-columns: repeat(auto-fill,minmax(200px,1fr));
        
    }
    @media screen and (max-width:550px) {
        grid-template-columns: repeat(auto-fill,minmax(300px,1fr));
        
    }
`