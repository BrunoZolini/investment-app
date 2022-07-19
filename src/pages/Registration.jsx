import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';


export default function Registration() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const history = useHistory();

  useEffect(() => {
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    const FIVE = 5;
    const TWO = 2;
    const users = JSON.parse(localStorage.getItem('users')) || [];

    if (
        !users.some((user) => user.email === email) // verifica se ja existe o email
        && password.length > FIVE // verifica se a senha é maior que 5
        && emailRegex.test(email) // verifica se o email tem o formato esperado
        && name.length > TWO // verifica se o name é maior que 4
        && password === confirmPassword // confirma se o password esta igual a confirmação de password
        ) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [email, name, password, confirmPassword]);

  const saveUsers = () => {
    const usersStorage = JSON.parse(localStorage.getItem('users')) || [];
    const user = {
      id: usersStorage.length,
      email,
      name,
      password,
      lastConnection: '',
    }
    usersStorage.push(user)
    localStorage.setItem('users', JSON.stringify(usersStorage));
  }

  const handleRegistration = (e) => {
    e.preventDefault();
    saveUsers();
    setIsRegistered(true);
    setTimeout(() => {
      history.push('/');
    }, 1000);    
  };

  return (
    <div>
      {isRegistered && <p>Cadastrando Usuário</p>}
      <form>
        <label htmlFor="email">
          Email:
          <input
            type="text"
            id='email'
            onChange={ ({ target }) => setEmail(target.value) }
          />
        </label>

        <label htmlFor="name">
          Nome:
          <input
            type="text"
            id='name'
            onChange={ ({ target }) => setName(target.value) }
          />
        </label>

        <label htmlFor="password">
          Senha:
          <input
            type="password"
            id='password'
            onChange={ ({ target }) => setPassword(target.value) }
          />
        </label>

        <label htmlFor="confirmPassword">
          Confirmar Senha:
          <input
            type="password"
            id='confirmPassword'
            onChange={ ({ target }) => setConfirmPassword(target.value) }
          />
        </label>

        <button
          type="submit"
          disabled={ isDisabled }
          onClick={ handleRegistration }
        >
            Cadastrar
        </button>
      </form>
    </div>
  )
}
