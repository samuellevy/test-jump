import React, { Component } from "react";

import { Container, Section, Header } from "./styles";
import Button from "../../components/Button";
import SearchBox from "../../components/SearchBox";

export default class Sessions extends Component {
  render() {
    return (
      <Container>
        <Section>
          <Header>
            <Button>Exportar</Button>
            <SearchBox />
          </Header>
        </Section>
      </Container>
    );
  }
}
