import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Sessions from "./pages/Sessions";
import { GlobalStyle } from "./globals/GlobalStyle";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact component={Sessions} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
