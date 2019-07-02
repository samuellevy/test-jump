import React, { Component } from "react";

import { Container, Header, Field, Body, Item, Value, Text, Button, Status, LoadingBox } from "./styles";

import { connect } from "react-redux";

import { ReactComponent as Loading } from "../../assets/images/loading.svg";

class Table extends Component {
  state = {
    items: [{}, {}, {}, {}, {}, {}]
  };

  handleCloseSession(session_id) {
    console.log(`Encerrar sessão ${session_id}`);
  }

  formatDate(date) {
    const dateObj = new Date(date);
    const day = dateObj.getDate();
    const month = dateObj.getMonth();
    const year = dateObj.getFullYear();
    const hour = dateObj.getHours();
    const minute = dateObj.getMinutes();

    date = `${this.formatDigits(day)}/${this.formatDigits(month)}/${year} (${this.formatDigits(hour)}h${this.formatDigits(minute)})`;
    return date;
  }

  formatDigits(n) {
    if (n === 0) return "00";
    else return n > 9 ? "" + n : "0" + n;
  }

  render() {
    const { data, loading } = this.props;
    return (
      <Container>
        <Header>
          <tr>
            <Field>Operador</Field>
            <Field>Abertura de sessão</Field>
            <Field>Fechamento de sessão</Field>
          </tr>
        </Header>
        {loading ? (
          <LoadingBox>
            <Loading width={20} height={60} />
          </LoadingBox>
        ) : (
          <Body>
            {data.sessions.map((item, key) => (
              <Item key={key}>
                <Value>
                  <Text>{data.username}</Text>
                </Value>
                <Value>
                  <Text>{this.formatDate(item.startDateTime)}</Text>
                  {/* <Button>Encerrar sessão</Button> */}
                </Value>
                <Value>
                  {new Date(item.endDateTime) > new Date(item.startDateTime) ? (
                    <Text>{this.formatDate(item.endDateTime)}</Text>
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
        )}
      </Container>
    );
  }
}

export default connect(state => ({
  data: state.sessions.data,
  loading: state.sessions.loading
}))(Table);
