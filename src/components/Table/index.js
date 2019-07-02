import React, { Component } from "react";

import { Container, Header, Field, Body, Item, Value } from "./styles";

export default class Table extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Field>Operador</Field>
          <Field>Abertura de sessão</Field>
          <Field>Fechamento de sessão</Field>
        </Header>
        <Body>
          <Item>
            <Value>José Augusto da Silva Soares Brandão</Value>
            <Value>16/04/2019 (10h54)</Value>
            <Value>16/04/2019 (10h54)</Value>
          </Item>
          <Item>
            <Value>Samuel Levy</Value>
            <Value>10/06/2019 (20h00)</Value>
            <Value>10/06/2019 (20h00)</Value>
          </Item>
        </Body>
      </Container>
    );
  }
}
