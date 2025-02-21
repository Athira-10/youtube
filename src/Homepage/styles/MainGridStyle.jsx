import { styled } from "styled-components";

export const MainGridStyle = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width:  calc(100% - 249px);
    height: max-content;
    transform-origin: right top;
    margin-left:"249px";
    padding-inline: min(3%,2rem);
    padding-block-end:2rem;
    transition: 
        margin-left 0.3s ease-out,
        width .3s ease-out;

`;
