import React, { useState, useEffect, useContext } from 'react';
import context from '../../context/myContext';
// import * as C from './styles';


export default function BuyAndSellStock({stock}) {
  const { willBuy, setWillBuy, currentUser } = useContext(context);
  const [userStocks, setUserStocks] = useState([]);


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
            !willBuy || !userStocks.some((item) => item.code === stock.code)
          }
        >
          Vender
        </button>
      </div>
  );
}

