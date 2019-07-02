import React, { Component } from "react";

import { Container, InputGroup, Input, Button } from "./styles";
import { colors } from "../../globals/styles";
import Icon from "../Icon";

export default class SearchBox extends Component {
  render() {
    return (
      <Container>
        <InputGroup>
          <Input placeholder={"Pesquisar"} />
          <Icon image="search" color={colors.darkblue} size={15} />
        </InputGroup>

        <Button>
          <Icon image="arrow_down" color={colors.white} size={8} />
        </Button>
      </Container>
    );
  }
}
