import React from 'react';
import { mockDB } from '../helpers/mockDB';

export default function AllStocksTable() {

  return (
    <table>
      <caption>Ações no mercado</caption>
      <thead>
        <tr>
          <th>Empresa</th>
          <th>Código</th>
          <th>Categoria</th>
          <th>Valor Unitário</th>
          <th>Negociar</th>
        </tr>
      </thead>
      <tbody>
        { mockDB
          .map((stock) => (
            <tr key={ stock.id }>
              <td>{stock.name}</td>
              <td>{stock.code}</td>
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
