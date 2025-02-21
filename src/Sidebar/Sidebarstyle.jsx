import { styled } from "styled-components";



const SideBarStyle = styled.div`
    position: fixed;
    height: 90%;
    width:200px;
    display: flex;
    flex-direction: column;
    background-color:black;
    gap:10px;
    overflow-y: auto;
    padding:700 px;
    transition: left 0.3s ease-out;

    /* ===== Scrollbar CSS ===== */
  /* Firefox */
    scrollbar-width: auto;
    scrollbar-color: transparent;
    
    &:hover{
        scrollbar-color: #636363 transparent;
    } 
    /* Chrome, Edge, and Safari */
    &::-webkit-scrollbar {
    width: 7px;
    }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &:hover::-webkit-scrollbar-thumb {
    background-color: #636363;
    border-radius: 10px;
    border: 0px none #ffffff;
  }
`;


const MenuSection = styled.div`
    display: flex;
    flex-direction: column;

    & .sectionTitle{
        font-size: .9rem;
        font-family: sans-serif;
        font-weight: 500;
       
    }

    & p{
        font-family: sans-serif;
        font-size: .8rem;
        color: #ffffffd0;
        max-width: 30ch;
        line-height: 1.9;
    }
`;
const AppShell = styled.div`
    position: relative;
    min-width: 950px;
    height: 90dvh;
    margin-top: 4.1rem;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
   
`;

export { SideBarStyle,MenuSection,AppShell };