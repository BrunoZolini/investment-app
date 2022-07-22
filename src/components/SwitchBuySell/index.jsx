import React, { useState, useEffect, useContext } from 'react';
import context from '../../context/myContext';
import * as C from './styles';
import * as S from '../shared/Switch';

export default function BuyAndSellStock({ stock }) {
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
    <C.Container>
      <S.BlueSwitch
        type="button"
        onClick={() => setWillBuy(!willBuy)}
        disabled={willBuy}
      >
        Comprar
      </S.BlueSwitch>
      {userStocks.some((item) => item.code === stock.code) && (
        <S.RedSwitch
          type="button"
          onClick={() => setWillBuy(!willBuy)}
          disabled={
            !willBuy || !userStocks.some((item) => item.code === stock.code)
          }
        >
          Vender
        </S.RedSwitch>
      )}
    </C.Container>
  );
}
