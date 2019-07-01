import styled from "styled-components";
import { colors } from "../../globals/styles";

export const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Section = styled.div`
  width: 100%;
  max-width: 900px;
  background-color: ${colors.white};
`;
