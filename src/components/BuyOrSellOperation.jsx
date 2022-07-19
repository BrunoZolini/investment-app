import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import context from '../context/myContext'

export default function BuyOrSellOperation({ stock }) {
const { willBuy, setIsConfirmed } = useContext(context);
const [operation, setOperation] = useState();
const [quantity, setQuantity] = useState(1);
const [user, setUser] = useState({});
const [allUsersStocks, setAllUsersStocks] = useState({}) 

const history = useHistory();

useEffect(() => {
  const currUser = JSON.parse(localStorage.getItem('currentUser')) || {};
  const usersStocks = JSON.parse(localStorage.getItem('usersStocks')) || {};

  setUser(currUser);
  setAllUsersStocks(usersStocks);
  setOperation(willBuy ? 'Comprar' : 'Vender')
}, [willBuy]);  

const validateQuantity = (target) => {
  let value = Math.max(1, Number(target.value));
  if (!willBuy) {
    const max = allUsersStocks[user.id].find(({ code }) => code === stock.code).quantity
    value = Math.max(1, Math.min(max, Number(target.value)));
  }
  
  setQuantity(value)
}

const buyOperation = () => {
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

const sellOperation = () => {
  const i = allUsersStocks[user.id].findIndex(({ code }) => code === stock.code)
  if (allUsersStocks[user.id][i].quantity === quantity) {
    allUsersStocks[user.id] = allUsersStocks[user.id].filter(({ code }) => code !== stock.code);
    return localStorage.setItem('usersStocks', JSON.stringify(allUsersStocks)); // Caso venda todas as ações
  }
  allUsersStocks[user.id][i].quantity = parseFloat(allUsersStocks[user.id][i].quantity) - parseFloat(quantity); 
  return localStorage.setItem('usersStocks', JSON.stringify(allUsersStocks)); // Caso não venda todas as ações
  
}

const confirmOperation = () => {
  if(willBuy) buyOperation();
  if(!willBuy) sellOperation();

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
