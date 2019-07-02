import styled from "styled-components";
import { colors } from "../../globals/styles";

export const Container = styled.button`
  font-size: 12px;
  background-color: ${colors.green};
  border: none;
  padding: 6px 17px;
  color: ${colors.white};
  border-radius: 2px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 108px;
  cursor: pointer;
`;
