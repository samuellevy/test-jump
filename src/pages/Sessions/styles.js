import styled from "styled-components";
import { colors } from "../../globals/styles";

export const Container = styled.div`
  display: flex;
  margin-top: 57px;
  align-content: center;
  flex-wrap: wrap;
  flex-direction: column;
`;

export const Section = styled.div`
  width: 100%;
  max-width: 900px;
  background-color: ${colors.white};
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 19px 20px;
`;

export const InputBox = styled.div``;

export const Footer = styled.footer`
  padding: 20px 20px;
  font-size: 18px;
  color: ${colors.darkgray};
  text-align: center;
`;
