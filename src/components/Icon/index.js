import React from "react";

// import { Container } from './styles';
import { ReactComponent as ArrowDown } from "../../assets/images/down-arrow.svg";
import { ReactComponent as Search } from "../../assets/images/search.svg";

const renderIcon = props => {
  switch (props.image) {
    case "arrow_down":
      return <ArrowDown fill={props.color} width={props.size} height={props.size} />;
    case "search":
      return <Search fill={props.color} width={props.size} height={props.size} />;
    default:
      return <div />;
  }
};

const Icon = props => renderIcon(props);
export default Icon;
