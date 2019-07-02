import React, { Component } from "react";

import { Container, Section, Header } from "./styles";
import Button from "../../components/Button";
import SearchBox from "../../components/SearchBox";
import Icon from "../../components/Icon";
import { colors } from "../../globals/styles";
import Table from "../../components/Table";

export default class Sessions extends Component {
  render() {
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
