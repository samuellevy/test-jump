import styled from "styled-components";
import { colors } from "../../globals/styles";

export const Container = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 3px;
  border-bottom-collapse: separate;
  border-bottom-spacing: 0 1em;
`;
export const Header = styled.thead`
  background-color: ${colors.darkblue};
`;
export const Field = styled.th`
  color: ${colors.white};
  font-size: 12px;
  padding: 20px 0;
  font-weight: normal;
`;
export const Body = styled.tbody``;
export const Item = styled.tr``;
export const Value = styled.td`
  color: ${colors.darkblue};
  font-size: 14px;
  padding: 21px 0;
  font-weight: normal;
  text-align: center;
`;
