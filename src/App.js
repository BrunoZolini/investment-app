import React from 'react';
import Provider from './context/myProvider'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Registration from './pages/Registration';
import StockList from './pages/StockList';
import BuyAndSellStock from './pages/BuyAndSellStock';
import DepositAndWithdraw from './pages/DepositAndWithdraw';


function App() {
  return (
    <div>
      <Provider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ Login } />
            <Route exact path="/acoes" component={ StockList } />
            <Route exact path="/cadastro" component={ Registration } />
            <Route exact path="/acao/:code" component={ BuyAndSellStock } />
            <Route exact path="/banco" component={ DepositAndWithdraw } />
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
