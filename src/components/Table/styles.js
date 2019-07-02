import styled from "styled-components";
import { colors } from "../../globals/styles";

export const Container = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 3px;
`;
export const Header = styled.thead`
  background-color: ${colors.darkblue};
  text-align: left;
`;
export const Field = styled.th`
  color: ${colors.white};
  font-size: 12px;
  padding: 20px 0;
  font-weight: normal;
  text-align: center;
  :first-child {
    width: 249px;
    text-align: center;
  }
  :last-child {
    text-align: left;
  }
`;
export const Body = styled.tbody`
  text-align: left;
`;
export const Item = styled.tr`
  border-bottom: 1px solid ${colors.gray};
  :hover {
    background-color: ${colors.beige};
    border-bottom: 2px solid ${colors.gray};
  }
`;
export const Value = styled.td`
  color: ${colors.blue};
  font-size: 0.75em;
  padding: 20px 0 21px;
  font-weight: 400;
  text-align: center;
  :last-child {
    text-align: left;
  }
`;
export const Text = styled.div``;
export const Button = styled.button`
  display: block;
  margin: 0 auto;
  border: none;
  background-color: transparent;
  font-size: 15px;
  font-weight: 900;
  letter-spacing: -1px;
`;
export const Status = styled.span`
  border: 1px solid ${colors.blue};
  border-radius: 50px;
  width: 100px;
  text-align: center;
  padding: 7px 14px;
`;
