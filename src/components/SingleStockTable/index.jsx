import React, { useContext, useEffect, useState } from "react";
import context from "../../context/myContext";

export default function SingleStockTable({ stock }) {
  const { willBuy, setWillBuy, currentUser } = useContext(context);
  const [userStocks, setUserStocks] = useState([]);

  useEffect(() => {

    const allUsersStocks = JSON.parse(localStorage.getItem('usersStocks'));
    if(allUsersStocks === null || !allUsersStocks[currentUser.id]) {
      setUserStocks([])
    }else {
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
      <table>
        <thead>
          <tr>
            <th>Código</th>
            <th>Empresa</th>
            <th>Categoria</th>
            <th>Valor Unitário</th>
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
            <td>{stock.code}</td>
            <td>{stock.name}</td>
            <td>{stock.category}</td>
            <td>{parseFloat(stock.value).toFixed(2)}</td>
            {!willBuy && userStocks.length && (
              <>
                <td>
                  {
                    userStocks.find(({ code }) => code === stock.code)
                      .quantity
                  }
                </td>
                <td>
                  {(
                    parseFloat(stock.value) *
                    parseFloat(
                      userStocks.find(({ code }) => code === stock.code)
                        .quantity
                    )
                  ).toFixed(2)}
                </td>
              </>
            )}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
