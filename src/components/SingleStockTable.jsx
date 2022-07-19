import React from 'react'

export default function SingleStockTable({ stock }) {
  return (
    <div>
      <h1>Comprar/Vender Ação</h1>
    <table>
      <thead>
        <tr>
          <th>Código</th>
          <th>Empresa</th>
          <th>Categoria</th>
          <th>Valor Unitário</th>        
        </tr>
      </thead>
      <tbody>        
        <tr>
          <td>{stock.code}</td>
          <td>{stock.name}</td>
          <td>{stock.category}</td>
          <td>{parseFloat(stock.value).toFixed(2)}</td>                          
        </tr>          
      </tbody>
    </table>
    </div>
  )
}
