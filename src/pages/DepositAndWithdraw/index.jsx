/* eslint-disable no-alert */
import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import context from '../../context/myContext';
import * as C from './styles';
import * as S from '../../components/shared/Switch';
import * as B from '../../components/shared/Buttons';

export default function DepositsAndWithdrawals() {
  const { currentUser, setCurrentUser } = useContext(context);
  const [inputValue, setInputValue] = useState();
  const [willDeposit, setWillDeposit] = useState(true);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('currentUser')) || {};
    setCurrentUser(user);
  }, [setCurrentUser]);

  const validateQuantity = (target) => {
    let value = Math.max(0, Number(target.value));
    if (!willDeposit) {
      const max = currentUser.accountBalance;
      value = Math.max(0, Math.min(max, Number(target.value)));
    }

    setInputValue(value);
  };

  const changeOperation = () => {
    setInputValue(0);
    setWillDeposit(!willDeposit);
  };

  const depositOperation = () => {
    const newBalance = currentUser.accountBalance + inputValue;
    currentUser.accountBalance = newBalance;
    const usersStorage = JSON.parse(localStorage.getItem('users')) || [];
    const i = usersStorage.findIndex(({ id }) => id === currentUser.id);
    usersStorage[i] = currentUser;
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    localStorage.setItem('users', JSON.stringify(usersStorage));
    setCurrentUser(currentUser);
  };

  const withdrawOperation = () => {
    const newBalance = currentUser.accountBalance - inputValue;
    currentUser.accountBalance = newBalance;
    const usersStorage = JSON.parse(localStorage.getItem('users')) || [];
    const i = usersStorage.findIndex(({ id }) => id === currentUser.id);
    usersStorage[i] = currentUser;
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    localStorage.setItem('users', JSON.stringify(usersStorage));
    setCurrentUser(currentUser);
    if (newBalance === 0) {
      setWillDeposit(!willDeposit);
    }
  };

  const confirmOperation = () => {
    if (!inputValue || inputValue === 0) {
      window.alert('O valor deve ser maior que ZERO!')
      return;
    }
    if (willDeposit) depositOperation();
    if (!willDeposit) withdrawOperation();
    setInputValue(0);
    setIsConfirmed(true);
    setTimeout(() => {
      setIsConfirmed(false);
    }, 1500);
  };

  return (
    <C.Container>
      <Header />
      <C.SwitchContainer>
        <S.BlueSwitch
          type="button"
          onClick={changeOperation}
          disabled={willDeposit}
        >
          Depositar
        </S.BlueSwitch>
        {currentUser.accountBalance !== 0 && (
          <S.RedSwitch
            type="button"
            onClick={changeOperation}
            disabled={!willDeposit}
          >
            Sacar
          </S.RedSwitch>
        )}
      </C.SwitchContainer>
      <C.Content color={willDeposit ? '#0000FF80' : '#FF000080'}>
        <C.Operation>
          <h2>{willDeposit ? 'Depositar' : 'Sacar'}</h2>
          {isConfirmed && <span>Operação Confirmada!</span>}
          <label htmlFor="value">
            Valor R$:
            <input
              type="number"
              id="value"
              onChange={({ target }) => validateQuantity(target)}
              value={ inputValue }
            />
          </label>
          <B.ButtonsContainer>
            <B.ButtonBack type="button" onClick={() => history.push('/acoes')}>
              Voltar
            </B.ButtonBack>
            <B.ButtonDefault
              type="button"
              onClick={confirmOperation}
            >
              Confirmar
            </B.ButtonDefault>
          </B.ButtonsContainer>
        </C.Operation>
      </C.Content>
    </C.Container>
  );
}
