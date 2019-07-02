import React, { Component } from "react";

import { Container, Header, Field, Body, Item, Value, Text, Button, Status } from "./styles";

import { connect } from "react-redux";

class Table extends Component {
  state = {
    items: [{}, {}, {}, {}, {}, {}]
  };

  handleCloseSession(session_id) {
    console.log(`Encerrar sessão ${session_id}`);
  }

  render() {
    const { data } = this.props;
    return (
      <Container>
        <Header>
          <tr>
            <Field>Operador</Field>
            <Field>Abertura de sessão</Field>
            <Field>Fechamento de sessão</Field>
          </tr>
        </Header>
        <Body>
          {data.sessions.map((item, key) => (
            <Item key={key}>
              <Value>
                <Text>{data.username}</Text>
              </Value>
              <Value>
                <Text>{item.startDateTime}</Text>
                {/* <Button>Encerrar sessão</Button> */}
              </Value>
              <Value>
                {new Date(item.endDateTime) > new Date(item.startDateTime) ? (
                  <Text>{item.endDateTime}</Text>
                ) : (
                  <>
                    <Status>Usuário Ativo</Status>
                    <Button
                      onClick={() => {
                        this.handleCloseSession(item.sessionId);
                      }}
                    >
                      Encerrar sessão
                    </Button>
                  </>
                )}
              </Value>
            </Item>
          ))}
        </Body>
      </Container>
    );
  }
}

export default connect(state => ({
  data: state.sessions.data
}))(Table);
