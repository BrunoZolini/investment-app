import React, { useContext } from 'react';
import { mockDB } from '../helpers/mockDB';
import { useHistory } from 'react-router-dom';
import context from '../context/myContext';


export default function AllStocksTable() {
  const { setWillBuy } = useContext(context)
  const history = useHistory();

  const handleBuyOrSell = (stock, operation) => {
    if(operation === 'buy') setWillBuy(true)
    if(operation === 'sell') setWillBuy(false)

    history.push(`/acao/${stock.code}`)
  }


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
          { mockDB
            .map((stock) => (
              <tr key={ stock.id }>
                <td>{stock.code}</td>
                <td>{stock.name}</td>
                <td>{stock.category}</td>
                <td>{parseFloat(stock.value).toFixed(2)}</td>
                <td>
                  <button
                    type='button'
                    onClick={() => handleBuyOrSell(stock, 'buy')}
                  >
                    Comprar
                  </button>
                  <button
                    type='button'
                    onClick={() => handleBuyOrSell(stock, 'sell')}
                  >
                    Vender
                  </button>
                </td>              
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
