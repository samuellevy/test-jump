import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Sessions from "./pages/Sessions";
import { GlobalStyle } from "./globals/GlobalStyle";

import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Switch>
          <Route path="/" exact component={Sessions} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
