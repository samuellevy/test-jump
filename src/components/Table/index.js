import React, { Component } from "react";

import { Container, Header, Field, Body, Item, Value, Text, Button, Status } from "./styles";

export default class Table extends Component {
  state = {
    items: [{}, {}, {}, {}, {}, {}]
  };
  render() {
    return (
      <Container>
        <Header>
          <Field>Operador</Field>
          <Field>Abertura de sessão</Field>
          <Field>Fechamento de sessão</Field>
        </Header>
        <Body>
          {this.state.items.map(() => (
            <Item>
              <Value>
                <Text>José Augusto da Silva Soares Brandão</Text>
              </Value>
              <Value>
                {/* <Text>16/04/2019 (10h54)</Text> */}
                <Button>Encerrar sessão</Button>
              </Value>
              <Value>
                <Status>Usuário Ativo</Status>
              </Value>
            </Item>
          ))}
        </Body>
      </Container>
    );
  }
}
