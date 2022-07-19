import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import context from '../context/myContext'


export default function BuyOrSellOperation({ stock }) {
const { willBuy, setIsConfirmed } = useContext(context)
const [operation, setOperation] = useState()
const [quantity, setQuantity] = useState(0)

const history = useHistory();



useEffect(() => {
  setOperation(willBuy ? 'Comprar' : 'Vender')
}, [willBuy]);

const validateQuantity = (target) => {
  const value = target.value.replace(/\+|-/ig, '');
  setQuantity(value)
}

const buyOperation = () => {
  const user = JSON.parse(localStorage.getItem('currentUser')) || {};
    const allUsersStocks = JSON.parse(localStorage.getItem('usersStocks')) || {};
    if (allUsersStocks[user.id]) {      
      if (allUsersStocks[user.id].some(({ code }) => code === stock.code)) {
        const i = allUsersStocks[user.id].findIndex(({ code }) => code === stock.code)
        allUsersStocks[user.id][i].quantity = parseFloat(allUsersStocks[user.id][i].quantity) + parseFloat(quantity); 
        return localStorage.setItem('usersStocks', JSON.stringify(allUsersStocks)); // Caso o seja uma compra repetida
      }
      allUsersStocks[user.id].push({...stock, quantity })
      return localStorage.setItem('usersStocks', JSON.stringify(allUsersStocks)); // Caso o seja a primeira de determinada ação
    }
    return localStorage.setItem('usersStocks', JSON.stringify(
      {[user.id] : [{...stock, quantity }]})); // Caso o seja a primeira compra do usuário
}

const confirmOperation = () => {
  if(willBuy) buyOperation();
  setIsConfirmed(true);
  setTimeout(() => {
    history.push('/acoes');
    setIsConfirmed(false)
  }, 1000);
}

return (
  <div>
      <label htmlFor={operation}>
        {operation}
        <input          
          type="number"
          id={operation}
          value={quantity}
          onChange={ ({ target }) => validateQuantity(target) }
        />
      </label>
      <p>Valor Total: R$ {(parseFloat(stock.value) * quantity).toFixed(2)}</p>
      <div>
        <button 
          type='button'
          onClick={() => history.push('/acoes')}
        >
          Voltar
        </button>
        <button
          type='button'
          onClick={ confirmOperation }
        >
          Confirmar
        </button>
      </div>
    </div>

  )
}
