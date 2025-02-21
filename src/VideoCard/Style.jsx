import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const Style = styled(Link)`
   text-decoration: none;
   display:flex;
   flex-direction:column;
   gap:1rem;
   color: white;

   .img-cover{
    max-width: 100%;
    aspect-ratio: 6 / 3;
    display: block;
    background-size: cover;
    background-position: center center;
   }

   .flex-row{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: nowrap;
    align-items: flex-start;

    .content{
        display: flex;
        align-items: flex-start;
        flex-wrap:nowrap;
        gap: 8px;

        .content-text{
            h2{
                font-size: 0.96rem;
                margin-bottom:4px;
            }
            p{
                font-size: 0.8rem;
                opacity: .6;
                font-family: sans-serif;
                font-weight: 600;
            }
            p:first-child{
                max-width: 14ch;
            }
        }
    }
   }
    
`;