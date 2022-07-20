import React from 'react';
import AllStocksTable from '../../components/AllStocksTable';
import Header from '../../components/Header';
import MyStocksTable from '../../components/MyStocksTable';

export default function StockList() {
  return (
    <div>
      <Header />
      <MyStocksTable />
      <AllStocksTable />
    </div>
  );
}
