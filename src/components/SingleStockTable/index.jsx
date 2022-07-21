import React, { useContext, useEffect, useState } from 'react';
import context from '../../context/myContext';
import * as T from '../shared/Table';

export default function SingleStockTable({ stock }) {
  const { willBuy, setWillBuy, currentUser } = useContext(context);
  const [userStocks, setUserStocks] = useState([]);

  useEffect(() => {
    const allUsersStocks = JSON.parse(localStorage.getItem('usersStocks'));
    if (allUsersStocks === null || !allUsersStocks[currentUser.id]) {
      setUserStocks([]);
    } else {
      setUserStocks(allUsersStocks[currentUser.id]);
    }
  }, [currentUser.id, willBuy]);

  return (
    <div>
      <div>
        <button
          type="button"
          onClick={() => setWillBuy(!willBuy)}
          disabled={willBuy}
        >
          Comprar
        </button>
        <button
          type="button"
          onClick={() => setWillBuy(!willBuy)}
          disabled={
            !willBuy || !userStocks.some(({ code }) => code === stock.code)
          }
        >
          Vender
        </button>
      </div>
      <T.Table>
        <thead>
          <tr>
            <th>Código</th>
            <th>Empresa</th>
            <th>Vlr Unit. (R$)</th>
            {!willBuy && (
              <>
                <th>Quantidade</th>
                <th>Valor Total</th>
              </>
            )}
          </tr>
        </thead>
        <tbody>
          <tr>
            <T.Code>{stock.code}</T.Code>
            <T.Name>{stock.name}</T.Name>
            <T.UnitValue>{parseFloat(stock.value).toFixed(2)}</T.UnitValue>
            {!willBuy && userStocks.length && (
              <>
                <T.Quantity>
                  {userStocks.find(({ code }) => code === stock.code).quantity}
                </T.Quantity>
                <T.TotalValue>
                  {(
                    parseFloat(stock.value) *
                    parseFloat(
                      userStocks.find(({ code }) => code === stock.code)
                        .quantity
                    )
                  ).toFixed(2)}
                </T.TotalValue>
              </>
            )}
          </tr>
        </tbody>
      </T.Table>
    </div>
  );
}
