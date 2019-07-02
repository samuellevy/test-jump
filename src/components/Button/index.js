import React from "react";

import { Container } from "./styles";
import Icon from "../Icon";
import { colors } from "../../globals/styles";

const Button = props => (
  <Container onClick={props.onClick}>
    <div>{props.caption}</div>
    <Icon image="arrow_down" color={colors.white} size={8} />
  </Container>
);

export default Button;
