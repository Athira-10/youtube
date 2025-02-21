import { styled } from "styled-components";
import { Link } from "react-router-dom"

const MenuItem = styled(Link)`
    padding-block: 25px ;
    padding-inline-start:10px ;
    text-transform: capitalize;
    text-decoration: none;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 25px;
    font-size: 1rem;
    font-family: sans-serif;
    color: white;
    transform-origin: left top;
    transition: background-color .3s ease-out;

 

    & > svg{
        font-size: 1.3rem;
    }
`

const MenuSection = styled.div`
    display: flex;
    flex-direction: column;

    & .sectionTitle{
        font-size: .9rem;
        font-family: sans-serif;
        font-weight: 500;
        margin-bottom: 200px;
    }

    & p{
        font-family: sans-serif;
        font-size: .8rem;
        color: #ffffffd0;
        max-width: 30ch;
        line-height: 1.9;
    }
`;

const MenuDevider = styled.hr`
    height: .5px;
    border-color: ${props => props.theme.borderColor};
    border-radius:50%;
`

export { MenuItem, MenuSection, MenuDevider }