import { createGlobalStyle } from "styled-components";
import { colors } from "./styles";

export const GlobalStyle = createGlobalStyle`
  *{margin: 0; padding: 0; outline: none; box-sizing: border-box;}
  @import url('https://fonts.googleapis.com/css?family=Lato:300,400,800,900&display=swap');

  html{
    height: 100%;
    background-color: ${colors.softblue};
    font-family: 'Lato', sans-serif;
    body{
      height: 100%;
      #root{
        height: 100%;
        
      }
    }
  }
`;
