import styled from "styled-components";
import { colors } from "../../globals/styles";

import search from "../../assets/images/magnifiyng-glass.png";

export const Container = styled.div`
  width: 245px;
  border: 2px solid ${colors.darkblue};
  display: flex;
  flex-wrap: no-wrap;
  border-radius: 5px;
  justify-content: space-between;
  // background-color: tomato;
`;

export const InputGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`;

export const Input = styled.input`
  text-align: center;
  border: none;
  width: 100%;
  ::placeholder {
    font-style: oblique;
    background-image: url(${search});
    background-position: 80% 20%;
    background-repeat: no-repeat;
  }
`;

export const Button = styled.button`
  border: 0;
  background-color: ${colors.darkblue};
  padding: 0 15px;
`;
