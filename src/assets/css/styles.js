import styled from "styled-components";
import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
}
`;

export const Layout = styled.main`
width: 100vw;
height: 100vh;
padding: 59px 38px;
display: flex;
flex-direction: column;
align-items: center;
img{
    width: 400px;
}
`;

export const Game = styled.div`
display: flex;
justify-content: space-between;
width: 91vw;
button{
    width: 200px;
    height: 60px;
    background: #27AE60;
    border-radius: 8px;
    border: none;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    color: #FFFFFF;
    margin-top: 30px;
    margin-right: 15px
}
`;

export const Choices = styled.div`
display: flex;
flex-wrap: wrap;
width: 65vw;
max-width: 664px;
margin-top:70px;
button{
    width: 40px;
    height: 40px;
    background: #9FAAB5;
    border: 1px solid #7AA7C7;
    border-radius: 3px;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #798A9F;
    margin-right: 10px;
    margin-bottom: 11px;
}
`;