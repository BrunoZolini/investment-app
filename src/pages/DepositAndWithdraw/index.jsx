import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "../../components/Header";
import context from "../../context/myContext";

export default function DepositsAndWithdrawals() {
  const { currentUser, setCurrentUser } = useContext(context);
  const [value, setValue] = useState(0);
  const [willDeposit, setWillDeposit] = useState(true);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("currentUser")) || {};
    setCurrentUser(user);
  }, [setCurrentUser]);

  const validateQuantity = (target) => {
    let value = Math.max(1, Number(target.value));
    if (!willDeposit) {
      const max = currentUser.accountBalance;
      value = Math.max(0, Math.min(max, Number(target.value)));
    }

    setValue(value);
  };

  const changeOperation = () => {
    setValue(0);
    setWillDeposit(!willDeposit);
  };

  const depositOperation = () => {
    const newBalance = currentUser.accountBalance + value;
    currentUser.accountBalance = newBalance;
    const usersStorage = JSON.parse(localStorage.getItem("users")) || [];
    const i = usersStorage.findIndex(({ id }) => id === currentUser.id);
    usersStorage[i] = currentUser;
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    localStorage.setItem("users", JSON.stringify(usersStorage));
    setCurrentUser(currentUser);
  };

  const withdrawOperation = () => {
    const newBalance = currentUser.accountBalance - value;
    currentUser.accountBalance = newBalance;
    const usersStorage = JSON.parse(localStorage.getItem("users")) || [];
    const i = usersStorage.findIndex(({ id }) => id === currentUser.id);
    usersStorage[i] = currentUser;
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    localStorage.setItem("users", JSON.stringify(usersStorage));
    setCurrentUser(currentUser);
  };

  const confirmOperation = () => {
    if (willDeposit) depositOperation();
    if (!willDeposit) withdrawOperation();
    setValue(0);
    setIsConfirmed(true);
    setTimeout(() => {
      setIsConfirmed(false);
    }, 1500);
  };

  return (
    <div>
      <Header />
      {isConfirmed && <p>Operação Confirmada!</p>}
      <h2>Depósitos e Retiradas</h2>
      <div>
        <button type="button" onClick={changeOperation} disabled={willDeposit}>
          Depositar
        </button>
        <button type="button" onClick={changeOperation} disabled={!willDeposit}>
          Retirar
        </button>
        <label htmlFor="value">
          Valor R$:
          <input
            type="number"
            id="value"
            value={value}
            onChange={({ target }) => validateQuantity(target)}
          />
        </label>
        <button type="button" onClick={() => history.push("/acoes")}>
          Voltar
        </button>
        <button type="button" disabled={value === 0} onClick={confirmOperation}>
          Confirmar
        </button>
      </div>
    </div>
  );
}
