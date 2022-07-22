import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import context from '../../context/myContext';
import * as T from '../shared/Table';
import * as C from './styles';

export default function SingleStockTable({ stock }) {
  const { willBuy, currentUser } = useContext(context);
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
    <C.Container>
      <h2>Ação</h2>
      <T.Table>
        <thead>
          <tr>
            <th>Código</th>
            <th>Empresa</th>
            <th>Vlr Unit. (R$)</th>
            {!willBuy && (
              <>
                <th>Quantidade</th>
                <th>Valor Total (R$)</th>
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
                  {`${(
                    parseFloat(stock.value) *
                    parseFloat(
                      userStocks.find(({ code }) => code === stock.code)
                        .quantity
                    )
                  ).toFixed(2)}`}
                </T.TotalValue>
              </>
            )}
          </tr>
        </tbody>
      </T.Table>
    </C.Container>
  );
}

SingleStockTable.propTypes = {
  stock: PropTypes.object,
}.isRequired;
