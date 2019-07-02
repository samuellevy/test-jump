import React from "react";

// import { Container } from './styles';
import { ReactComponent as ArrowDown } from "../../assets/images/down-arrow.svg";

const Icon = props =>
  props.image == "arrow_down" && (
    <ArrowDown fill={props.color} width={props.size} />
  );

export default Icon;
