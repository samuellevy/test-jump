import { createGlobalStyle } from "styled-components";
import { colors } from "./styles";

export const GlobalStyle = createGlobalStyle`
  *{margin: 0; padding: 0; outline: none; box-sizing: border-box;}

  html{
    height: 100%;
    background-color: ${colors.bluegray};
    body{
      height: 100%;
      #root{
        height: 100%;
        
      }
    }
  }
`;
