import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { ButtonDefault, ButtonBack } from "../../components/shared/Buttons";
import * as C from "./styles";

export default function Registration() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);
  const history = useHistory();

  const saveUsers = () => {
    const usersStorage = JSON.parse(localStorage.getItem("users")) || [];
    const user = {
      id: usersStorage.length,
      email,
      name,
      password,
      lastConnection: "",
      accountBalance: 0,
    };
    usersStorage.push(user);
    localStorage.setItem("users", JSON.stringify(usersStorage));
  };

  const validateEmail = () => {
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    const users = JSON.parse(localStorage.getItem("users")) || [];
    if(!emailRegex.test(email)) { // verifica se o email tem o formato esperado
      window.alert('Formato do email inválido!');
      return false;
    }     
    if(users.some((user) => user.email === email)) { // verifica se ja existe o email
      window.alert('Email já existente!');
      return false;
    }
    return true;
  }
  
  const validateName = () => {
    const TWO = 2;
    if (name.length <= TWO) { // verifica se o name é maior que 3
      window.alert('O nome deve possuir no mínimo 3 caracteres!');
      return false;
    } 
    return true;
  }

  const validatePassword = () => {
    const FIVE = 5;
    if (password.length <= FIVE) { // verifica se a senha é maior que 5
      window.alert('A senha deve possuir no mínimo 6 caracteres!');
      return false;
    } 
    return true;
  }


  const validateConfirmPassword = () => {
    if (password !== confirmPassword) { // confirma se o password esta igual a confirmação de password
      window.alert('Senha e confirmar senha não são iguais!');
      return false;
    } 
    return true;
  }

  const validateFields = () => {
    if(!validateEmail()) return false;
    if(!validateName()) return false;
    if(!validatePassword()) return false;
    if(!validateConfirmPassword()) return false;
    return true;
  }

  const handleRegistration = (e) => {
    e.preventDefault();
    if(validateFields()) {
      saveUsers();
      setIsRegistered(true);
      setTimeout(() => {
        history.push("/");
      }, 1000);
    }    
  };

  return (
    <C.Container>
      <C.Content>
        <h1>Cadastro</h1>
        {!isRegistered && <span>Cadastrando Usuário...</span>}
        <form>
          <label htmlFor="email">
            Email:
            <input
              type="text"
              id="email"
              onChange={({ target }) => setEmail(target.value)}
            />
          </label>

          <label htmlFor="name">
            Nome:
            <input
              type="text"
              id="name"
              onChange={({ target }) => setName(target.value)}
            />
          </label>

          <label htmlFor="password">
            Senha:
            <input
              type="password"
              id="password"
              onChange={({ target }) => setPassword(target.value)}
            />
          </label>

          <label htmlFor="confirmPassword">
            Confirmar Senha:
            <input
              type="password"
              id="confirmPassword"
              onChange={({ target }) => setConfirmPassword(target.value)}
            />
          </label>
          <div>
            <ButtonDefault
              type="submit"
              onClick={handleRegistration}
            >
              Cadastrar
            </ButtonDefault>
            <ButtonBack type="button" onClick={() => history.push("/")}>
              Voltar
            </ButtonBack>
          </div>
        </form>
      </C.Content>
    </C.Container>
  );
}
