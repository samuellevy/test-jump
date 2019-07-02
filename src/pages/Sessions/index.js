import React, { Component } from "react";

import { Container, Section, Header, Footer } from "./styles";
import Button from "../../components/Button";
import SearchBox from "../../components/SearchBox";
import Table from "../../components/Table";

import { connect } from "react-redux";
import api from "../../services/api";

class Sessions extends Component {
  state = {};

  async getData(dispatch) {
    try {
      await api
        .then(response => {
          dispatch(this.setData(response.data.data));
        })
        .catch(error => {});
    } catch (error) {}
  }

  componentWillMount() {
    const { dispatch } = this.props;
    this.getData(dispatch);
  }

  setData(data) {
    return {
      type: "GET_DATA",
      data: data
    };
  }

  handleExportBtn() {
    console.log("Botão exportar clicado");
  }

  render() {
    return (
      <Container>
        <Section>
          <Header>
            <Button
              caption="Exportar"
              icon="arrow_down"
              onClick={() => {
                this.handleExportBtn();
              }}
            />
            <SearchBox />
          </Header>
          <Table />
        </Section>
        <Footer>Todos os direitos reservados a Jump Tecnologia | 2019 ©</Footer>
      </Container>
    );
  }
}
export default connect(state => ({
  data: state.sessions.data
}))(Sessions);
