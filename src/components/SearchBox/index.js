import React, { Component } from "react";

import { Container, Input, Button } from "./styles";
import { colors } from "../../globals/styles";
import Icon from "../Icon";

export default class SearchBox extends Component {
  render() {
    return (
      <Container>
        <Input placeholder={"Pesquisar"} />

        <Button>
          <Icon image="arrow_down" color={colors.white} size={8} />
        </Button>
      </Container>
    );
  }
}
