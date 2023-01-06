import styled, { createGlobalStyle } from "styled-components";

 export const Global = createGlobalStyle`
   *{
    margin:0;
    padding:0;
    box-sizing: border-box;
    outline: none;
   }
   body{
    width:100vw;
    height: 100%;
    margin-top: 4rem;
    display: flex;
    justify-content: center;
    background: #1A1A1A;
    color: #fff;
    font-family: 'Poppins', sans-serif;
   }
 `
 export const App = styled.section`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
    
  input{
    width: 20rem;
    height: 2rem;
    border-radius: 0.3rem;
    border: none;
   
  }
  @media (max-width: 600px) {
    input{
      width: 15rem;
    }
  }
  h1{
    margin: 0.8rem;
    color:#8B008B;
  }
  .btn{
    width: 4rem;
    height: 2rem;
    border-radius: 0.3rem;
    border: none;
    margin-left: 1rem;
    color:#8B008B;
  }
 `;