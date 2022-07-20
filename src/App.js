import React from "react";
import Provider from "./context/myProvider";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Login from "./pages/Login";
import Registration from "./pages/Registration";
import StockList from "./pages/StockList";
import BuyAndSellStock from "./pages/BuyAndSellStock";
import DepositAndWithdraw from "./pages/DepositAndWithdraw";

import GlobalStyles from "./assets/styles/global";
import defaultTheme from "./assets/styles/themes/default";

function App() {
  return (
    <div>
      <ThemeProvider theme={defaultTheme}>
        <Provider>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/acoes" component={StockList} />
              <Route exact path="/cadastro" component={Registration} />
              <Route exact path="/acao/:code" component={BuyAndSellStock} />
              <Route exact path="/banco" component={DepositAndWithdraw} />
            </Switch>
            <GlobalStyles />
          </BrowserRouter>
        </Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
