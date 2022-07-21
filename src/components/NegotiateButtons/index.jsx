import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import context from '../../context/myContext';
import * as C from './styles';

export default function NegotiateButtons({ stock, isDisable }) {
  const { setWillBuy } = useContext(context);
  const history = useHistory();

  const handleBuyOrSell = (operation) => {
    if (operation === 'buy') setWillBuy(true);
    if (operation === 'sell') setWillBuy(false);

    history.push(`/acao/${stock.code}`);
  };

  return (
    <C.Container>
      <C.Buy type="button" onClick={() => handleBuyOrSell('buy')}>
        Comprar
      </C.Buy>
      <C.Sell
        type="button"
        onClick={() => handleBuyOrSell('sell')}
        disabled={isDisable}
      >
        Vender
      </C.Sell>
    </C.Container>
  );
}
