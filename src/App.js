import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import StockList from './pages/StockList';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route exact path="/acoes" component={ StockList } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
