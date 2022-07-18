import React from 'react';
import { mockDB } from '../helpers/mockDB';

export default function MyStocksTable() {

  return (
    <table>
      <caption>Minhas Ações</caption>
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
        { mockDB
          .map((stock) => (
            <tr key={ stock.id }>
              <td>{stock.code}</td>
              <td>{stock.name}</td>
              <td>{stock.category}</td>
              <td>{parseFloat(stock.value).toFixed(2)}</td>
              <td>{stock.category}</td>
              <td>{parseFloat(stock.value).toFixed(2)}</td>
              <td>
                <button type='button'>
                  Comprar
                </button>
                <button type='button'>
                  Vender
                </button>
              </td>              
            </tr>
          ))}
      </tbody>
    </table>
  );
}
