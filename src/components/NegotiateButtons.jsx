import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import context from "../context/myContext";

export default function NegotiateButtons({ stock, isDisable }) {
  const { setWillBuy } = useContext(context)
  const history = useHistory();

  const handleBuyOrSell = (stock, operation) => {
    if(operation === 'buy') setWillBuy(true)
    if(operation === 'sell') setWillBuy(false)

    history.push(`/acao/${stock.code}`)
  }

  return (
    <>
      <button
        type="button"
        onClick={() => handleBuyOrSell(stock, "buy")}
      >
        Comprar
      </button>
      <button
        type="button"
        onClick={() => handleBuyOrSell(stock, "sell")}
        disabled={ isDisable }
      >
        Vender
      </button>
    </>
  );
}
