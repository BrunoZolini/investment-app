import React, { useContext, useEffect, useState } from 'react';
import context from '../../context/myContext';
import NegotiateButtons from '../NegotiateButtons';
import * as T from '../shared/Table';
import * as C from './styles';

export default function MyStocksTable() {
  const { currentUser } = useContext(context);
  const [userStocks, setUserStocks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const allUsersStocks =
      JSON.parse(localStorage.getItem('usersStocks')) || {};
    if (allUsersStocks[currentUser.id]) {
      setUserStocks(allUsersStocks[currentUser.id]);
    } else {
      setUserStocks([]);
    }
    setLoading(true);
  }, [currentUser.id]);

  return (
    <C.Container>
      {loading && (
        <div>
          <h2>Minhas Ações</h2>
          {userStocks.length ? (
            <T.Table>
              <thead>
                <tr>
                  <th>Código</th>
                  <th>Empresa</th>
                  <th>Vlr Unit. (R$)</th>
                  <th>Quantidade</th>
                  <th>Vlr Total (R$)</th>
                  <th>Negociar</th>
                </tr>
              </thead>
              <tbody>
                {userStocks.map((stock) => (
                  <tr key={stock.id}>
                    <T.Code>{stock.code}</T.Code>
                    <T.Name>{stock.name}</T.Name>
                    <T.UnitValue>{parseFloat(stock.value).toFixed(2)}</T.UnitValue>
                    <T.Quantity>{stock.quantity}</T.Quantity>
                    <T.TotalValue>
                      {(
                        parseFloat(stock.value) * parseFloat(stock.quantity)
                      ).toFixed(2)}
                    </T.TotalValue>
                    <td>
                      <NegotiateButtons stock={stock} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </T.Table>
          ) : (
            <p>Você ainda não possui ações</p>
          )}
        </div>
      )}
    </C.Container>
  );
}
