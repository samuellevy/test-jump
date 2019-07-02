import styled from "styled-components";
import { colors } from "../../globals/styles";

export const Container = styled.div`
  width: 245px;
  border: 2px solid ${colors.darkblue};
  display: flex;
  flex-wrap: no-wrap;
  border-radius: 5px;
  justify-content: space-between;
  background-color: tomato;
`;

export const Input = styled.input`
  text-align: center;
  border: none;
  width: 100%;
  ::placeholder {
    font-style: oblique;
  }
`;

export const Button = styled.button`
  border: 0;
  background-color: ${colors.darkblue};
  padding: 0 15px;
`;
