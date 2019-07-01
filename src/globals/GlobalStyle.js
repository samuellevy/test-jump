import { createGlobalStyle } from "styled-components";
import { colors } from "./styles";

export const GlobalStyle = createGlobalStyle`
  *{margin: 0; padding: 0; outline: none;}

  html{
    height: 100%;
    body{
      height: 100%;
      #root{
        height: 100%;
        background-color: ${colors.bluegray};
      }
    }
  }
`;
