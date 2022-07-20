import React, { useContext, useEffect, useState } from 'react';
import context from '../../context/myContext';
import { mockDB } from '../../helpers/mockDB';
import NegotiateButtons from '../NegotiateButtons';

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
    <div>
      <h2>Ações no mercado</h2>
      <table>
        <thead>
          <tr>
            <th>Código</th>
            <th>Empresa</th>
            <th>Categoria</th>
            <th>Valor Unitário</th>
            <th>Negociar</th>
          </tr>
        </thead>
        <tbody>
          {mockDB.map((stock) => (
            <tr key={stock.id}>
              <td>{stock.code}</td>
              <td>{stock.name}</td>
              <td>{stock.category}</td>
              <td>{parseFloat(stock.value).toFixed(2)}</td>
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
      </table>
    </div>
  );
}
