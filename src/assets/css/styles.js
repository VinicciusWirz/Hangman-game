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
    
}
div{
    padding-right: 15px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items: flex-end;
    height:100%;
    p{
        font-family: 'Noto Sans', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 50px;
        line-height: 68px;
        display: flex;
        justify-content:flex-end;
        text-align: center;
        color: #000000;
        letter-spacing: 0.2em;
        span{

        }
    }
}
`;

export const Choices = styled.div`
display: flex;
flex-wrap: wrap;
width: 65vw;
max-width: 664px;
margin-top:70px;

`;

export const Btns = styled.button`
    width: 40px;
    height: 40px;
    background: ${(props) => props.isDisabled ? '#9FAAB5' : '#E1ECF4'};
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
`

export const WordResult = styled.span`
color: ${(props) => props.gameResult === 'lose' ? 'red' : 'green'};
`