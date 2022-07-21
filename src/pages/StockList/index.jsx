import React from 'react';
import AllStocksTable from '../../components/AllStocksTable';
import Header from '../../components/Header';
import MyStocksTable from '../../components/MyStocksTable';
import * as C from './styles';

export default function StockList() {
  return (
    <C.Container>
      <Header />
      <C.Content>
        <MyStocksTable />
        <AllStocksTable />
      </C.Content>
    </C.Container>
  );
}
