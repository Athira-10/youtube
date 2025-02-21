import { styled } from "styled-components";

const NavStyle = styled.nav`
    position: fixed;
    background-color: ${props => props.theme.bgColor};
    z-index: 999;
    left: 0;
    right: 0;
    top: 0;
    min-width: max-content;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.8rem max(.6rem,3%);
    color:${props => props.theme.textColor};
    gap:1rem;
    

    /* logo Section */
    .menu{
        display: flex;
        gap: 2rem;
        font-size: 1.3rem;

        &  > *{
            cursor: pointer;
        }
        & >*:last-child{
            margin-top: .3rem;
        }
    }
    
    /* Seacch Bar Section */
    .search{
        display: flex;
        justify-content: center;
        align-content: center;
        gap: 1rem;
        /* background-color: #ffb6c13b; */
        width: max(60%,350px);

            .searchBar{
                flex: 1;
                display: flex;
                flex-wrap: nowrap;
                justify-content: center;
                align-items: center;
                border: 1px solid ${props => props.theme.borderColor};
                border-radius: 25px;
                transform-origin: left center;


                .searchInput{
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    border-radius: 25px 0 0 25px;

                    .searchBlock{
                        flex: 0;
                        display: flex;
                        align-content: center;
                        justify-content: center;
                        background: transparent;
                        border: none;
                        outline: none;
                        box-shadow: none;
                        font-size: 1.2rem;
                        padding:.2rem 0.8rem;
                    }

                    input{
                        width: 100%;
                        height: 100%;
                        display: inline-block;
                        outline: none !important;
                        border: none;
                        background: transparent;
                        padding-inline-start: 0.4rem ;
                        color:${props => props.theme.textColor};
                        font-size: .9rem;
                    }
                

                }

                .searchInput:has(input:focus) {
                    outline: 2px solid #0015ff41;
                }
                .serchInput:has(:focus) .searchBlock{
                    flex: auto;
                }

                .searchBtn{
                    background: ${props => props.theme.borderColor};
                    color:${props => props.theme.textColor};
                    border: none;
                    outline: none;
                    font-size: 1.2rem;
                    height:100% ;
                    display: flex;
                    padding: .5rem 0.9rem;
                    border-top-right-radius: 25px;
                    border-bottom-right-radius: 25px;
                    cursor: pointer;
                }
        }

        /* microbtn */
        .microBtn {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.2rem;
            padding: 0.4rem 0.5rem;
            border-radius: 100px;
            cursor: pointer;
            border: 1px solid ${props => props.theme.borderColor};
            transition: .3s ease-out;

            &:hover {
                background-color: #ff0000bb;
                border-color: transparent;
            }
        }
    }
    

   
   


    /* last Section */
    .other{
        display: flex;
        flex-wrap: nowrap;
        gap: 1rem;
    }
`;

export default NavStyle