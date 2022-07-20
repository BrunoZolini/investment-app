import React, { useContext, useEffect, useState } from 'react';
import context from '../../context/myContext';
import NegotiateButtons from '../NegotiateButtons';

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
    <div>
      {loading && (
        <div>
          <h2>Minhas Ações</h2>
          {userStocks.length ? (
            <table>
              <thead>
                <tr>
                  <th>Código</th>
                  <th>Empresa</th>
                  <th>Categoria</th>
                  <th>Valor Unitário</th>
                  <th>Quantidade</th>
                  <th>Valor Total</th>
                  <th>Negociar</th>
                </tr>
              </thead>
              <tbody>
                {userStocks.map((stock) => (
                  <tr key={stock.id}>
                    <td>{stock.code}</td>
                    <td>{stock.name}</td>
                    <td>{stock.category}</td>
                    <td>{parseFloat(stock.value).toFixed(2)}</td>
                    <td>{stock.quantity}</td>
                    <td>
                      {(
                        parseFloat(stock.value) * parseFloat(stock.quantity)
                      ).toFixed(2)}
                    </td>
                    <td>
                      <NegotiateButtons stock={stock} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>Você ainda não possui ações</p>
          )}
        </div>
      )}
    </div>
  );
}
