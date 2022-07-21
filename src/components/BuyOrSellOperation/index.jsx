import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import context from '../../context/myContext';
import * as C from './styles';
import { ButtonDefault, ButtonBack } from '../shared/Buttons';

export default function BuyOrSellOperation({ stock }) {
  const { willBuy, setIsConfirmed, currentUser, setCurrentUser, isConfirmed } =
    useContext(context);
  const [operation, setOperation] = useState();
  const [quantity, setQuantity] = useState(1);
  const [allUsersStocks, setAllUsersStocks] = useState({});

  const history = useHistory();

  useEffect(() => {
    const usersStocks = JSON.parse(localStorage.getItem('usersStocks')) || {
      [currentUser.id]: [],
    };
    setAllUsersStocks(usersStocks);
    setOperation(willBuy ? 'Comprar' : 'Vender');
  }, [currentUser.id, willBuy]);

  const validateQuantity = (target) => {
    let value = Math.max(1, Number(target.value));
    if (!willBuy) {
      const max = allUsersStocks[currentUser.id].find(
        ({ code }) => code === stock.code
      ).quantity;
      value = Math.max(1, Math.min(max, Number(target.value)));
    }

    setQuantity(value);
  };

  const validateAccountBalance = () => {
    const totalPrice = (parseFloat(stock.value) * quantity).toFixed(2);
    if (currentUser.accountBalance < totalPrice) {
      // eslint-disable-next-line no-alert
      window.alert('Saldo da conta insuficiente!');
      return true;
    }
    return false;
  };

  const buyBalanceUpdate = () => {
    const totalPrice = parseFloat(stock.value) * quantity;
    const newBalance = parseFloat(currentUser.accountBalance) - totalPrice;
    currentUser.accountBalance = newBalance;
    const usersStorage = JSON.parse(localStorage.getItem('users')) || [];
    const i = usersStorage.findIndex(({ id }) => id === currentUser.id);
    usersStorage[i] = currentUser;
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    localStorage.setItem('users', JSON.stringify(usersStorage));
    setCurrentUser(currentUser);
  };

  const sellBalanceUpdate = () => {
    const totalPrice = parseFloat(stock.value) * quantity;
    const newBalance =
      parseFloat(currentUser.accountBalance) + parseFloat(totalPrice);
    currentUser.accountBalance = newBalance;
    const usersStorage = JSON.parse(localStorage.getItem('users')) || [];
    const i = usersStorage.findIndex(({ id }) => id === currentUser.id);
    usersStorage[i] = currentUser;
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    localStorage.setItem('users', JSON.stringify(usersStorage));
    setCurrentUser(currentUser);
  };

  const buyOperation = () => {
    if (validateAccountBalance()) return true;
    if (allUsersStocks[currentUser.id]) {
      if (
        allUsersStocks[currentUser.id].some(({ code }) => code === stock.code)
      ) {
        const i = allUsersStocks[currentUser.id].findIndex(
          ({ code }) => code === stock.code
        );
        allUsersStocks[currentUser.id][i].quantity =
          parseFloat(allUsersStocks[currentUser.id][i].quantity) +
          parseFloat(quantity);
        buyBalanceUpdate();
        return localStorage.setItem(
          'usersStocks',
          JSON.stringify(allUsersStocks)
        ); // Caso o seja uma compra repetida
      }
      allUsersStocks[currentUser.id].push({ ...stock, quantity });
      buyBalanceUpdate();
      return localStorage.setItem(
        'usersStocks',
        JSON.stringify(allUsersStocks)
      ); // Caso o seja a primeira de determinada ação
    }
    buyBalanceUpdate();
    return localStorage.setItem(
      'usersStocks',
      JSON.stringify({
        ...allUsersStocks,
        [currentUser.id]: [{ ...stock, quantity }],
      })
    ); // Caso o seja a primeira compra do usuário
  };

  const sellOperation = () => {
    const i = allUsersStocks[currentUser.id].findIndex(
      ({ code }) => code === stock.code
    );
    if (allUsersStocks[currentUser.id][i].quantity === quantity) {
      allUsersStocks[currentUser.id] = allUsersStocks[currentUser.id].filter(
        ({ code }) => code !== stock.code
      );
      sellBalanceUpdate();
      return localStorage.setItem(
        'usersStocks',
        JSON.stringify(allUsersStocks)
      ); // Caso venda todas as ações
    }
    allUsersStocks[currentUser.id][i].quantity =
      parseFloat(allUsersStocks[currentUser.id][i].quantity) -
      parseFloat(quantity);
    sellBalanceUpdate();
    return localStorage.setItem('usersStocks', JSON.stringify(allUsersStocks)); // Caso não venda todas as ações
  };

  const confirmOperation = () => {
    if (willBuy) {
      if (buyOperation()) return;
    }
    if (!willBuy) sellOperation();
    setIsConfirmed(true);
    setTimeout(() => {
      history.push('/acoes');
      setIsConfirmed(false);
    }, 1000);
  };

  return (
    <C.Container>
      {isConfirmed && <C.Confirm>Operação realizada com sucesso!</C.Confirm>}
      <C.Content>
        <C.Operation operationColor={willBuy ? 'blue' : 'red'}>
          <h2>{operation}</h2>
          <label htmlFor={operation}>
            Quantidade
            <input
              type="number"
              id={operation}
              value={quantity}
              onChange={({ target }) => validateQuantity(target)}
            />
          </label>
          <p>
            Valor Total da {willBuy ? 'Compra: ' : 'Venda: ' }
            <span>R$ {(parseFloat(stock.value) * quantity).toFixed(2)}</span>
          </p>
        </C.Operation>
        <C.ButtonsContainer>
          <ButtonBack type="button" onClick={() => history.push('/acoes')}>
            Voltar
          </ButtonBack>
          <ButtonDefault type="button" onClick={confirmOperation}>
            Confirmar
          </ButtonDefault>
        </C.ButtonsContainer>
      </C.Content>
    </C.Container>
  );
}
