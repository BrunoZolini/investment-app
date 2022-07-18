import React from 'react';
import Provider from './context/myProvider'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Registration from './pages/Registration';
import StockList from './pages/StockList';


function App() {
  return (
    <div>
      <Provider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ Login } />
            <Route exact path="/acoes" component={ StockList } />
            <Route exact path="/cadastro" component={ Registration } />
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
