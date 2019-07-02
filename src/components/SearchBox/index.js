import React, { Component } from "react";

import { Container, InputGroup, Input, Button } from "./styles";
import { colors } from "../../globals/styles";
import Icon from "../Icon";

export default class SearchBox extends Component {
  state = {
    search: ""
  };

  handleSearchBtn() {
    console.log("Click no botão de search");
    this.searchAction();
  }

  handleKeyDown(e) {
    if (e.key === "Enter") {
      console.log("Enter pressionado");
      this.searchAction();
    }
  }

  searchAction() {
    console.log(`Pesquisar: ${this.state.search}`);
  }

  render() {
    return (
      <Container>
        <InputGroup>
          <Input placeholder={"Pesquisar"} value={this.state.search} onChange={search => this.setState({ search: search.target.value })} onKeyDown={e => this.handleKeyDown(e)} />
        </InputGroup>

        <Button onClick={() => this.handleSearchBtn()}>
          <Icon image="arrow_down" color={colors.white} size={8} />
        </Button>
      </Container>
    );
  }
}
