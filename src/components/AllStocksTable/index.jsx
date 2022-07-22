import React, { useContext, useEffect, useState } from 'react';
import context from '../../context/myContext';
import { mockDB } from '../../helpers/mockDB';
import NegotiateButtons from '../NegotiateButtons';
import * as T from '../shared/Table';
import * as C from './styles';

export default function AllStocksTable() {
  const [userStocks, setUserStocks] = useState([]);
  const { currentUser } = useContext(context);

  useEffect(() => {
    const allUsersStocks = JSON.parse(localStorage.getItem('usersStocks'));
    if (allUsersStocks === null || !allUsersStocks[currentUser.id]) {
      setUserStocks([]);
    } else {
      setUserStocks(allUsersStocks[currentUser.id]);
    }
  }, [currentUser.id]);

  return (
    <C.Container>
      <div>
        <h2>Ações no mercado</h2>
        <T.Table>
          <thead>
            <tr>
              <th>Código</th>
              <th>Empresa</th>
              <th>Vlr Unit. (R$)</th>
              <th>Negociar</th>
            </tr>
          </thead>
          <tbody>
            {mockDB.map((stock) => (
              <tr key={stock.id}>
                <T.Code>{stock.code}</T.Code>
                <T.Name>{stock.name}</T.Name>
                <T.UnitValue>{parseFloat(stock.value).toFixed(2)}</T.UnitValue>
                <td>
                  {userStocks.some(({ code }) => code === stock.code) ? (
                    <NegotiateButtons stock={stock} />
                  ) : (
                    <NegotiateButtons stock={stock} isDisable />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </T.Table>
      </div>
    </C.Container>
  );
}
