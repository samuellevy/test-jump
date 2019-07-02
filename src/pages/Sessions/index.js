import React, { Component } from "react";

import { Container, Section, Header } from "./styles";
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

  render() {
    const { data } = this.props;
    console.log(data);
    return (
      <Container>
        <Section>
          <Header>
            <Button caption="Exportar" icon="arrow_down" />
            <SearchBox />
          </Header>

          <Table />
        </Section>
      </Container>
    );
  }
}
export default connect(state => ({
  data: state.sessions.data
}))(Sessions);
