import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import SingleStockTable from '../../components/SingleStockTable';
import SwitchBuySell from '../../components/SwitchBuySell';
import BuyOrSellOperation from '../../components/BuyOrSellOperation';
import { mockDB } from '../../helpers/mockDB';
import * as C from './styles';

export default function BuyAndSellStock({
  match: {
    params: { code },
  },
}) {
  const [stock, setStock] = useState({});

  useEffect(() => {
    const currentStock = mockDB.find((item) => item.code === code);
    setStock(currentStock);
  }, [code]);

  return (
    <C.Container>
      <Header />
      <SwitchBuySell stock={stock} />
      <C.Content>
        <SingleStockTable stock={stock} />
        <BuyOrSellOperation stock={stock} />
      </C.Content>
    </C.Container>
  );
}

BuyAndSellStock.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.objectOf(PropTypes.string),
    code: PropTypes.string,
  }),
}.isRequired;
