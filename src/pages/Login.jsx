import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import context from '../context/myContext';

export default function Login() {
  const { setCurrentUser } = useContext(context);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState('');

  const [deniedUser, setDeniedUser] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const usersStorage = JSON.parse(localStorage.getItem('users')) || [];
    setUsers(usersStorage)

    const lastUser = usersStorage.reduce((acc, curr) => {
      return (acc.lastConnection > curr.lastConnection) ? acc : curr
  })
    setEmail(lastUser.email);
  }, []);

  const saveUserLogin = () => {
    const i = users.findIndex((user) => user.email === email);
    users[i].lastConnection = new Date();
    localStorage.setItem('users', JSON.stringify(users));
    setCurrentUser(users[i]);
  }

  const handleLogIn = (e) => {
    e.preventDefault();
    if (users
      .some((user) => user.email === email 
        && user.password === password)) {
          saveUserLogin();    
          history.push('/acoes');
    } else {
      setDeniedUser(true);
    }
    
  };

  return (
    <div>
      {deniedUser && <p> Email ou senha inválidos</p>}
      <form>
        <input
          placeholder="exemplo@exemplo.com"
          type="email"
          value={ email }
          onChange={ ({ target }) => setEmail(target.value) }
        />
        <input
          type="password"
          placeholder="Password"
          onChange={ ({ target }) => setPassword(target.value) }
        />
        <button
          type="submit"          
          onClick={ handleLogIn }
        >
          Entrar
        </button>
      </form>
      <p>Não tem uma conta? 
        <button
          type="button"          
          onClick={ () => history.push('/cadastro') }>
            Cadastrar
        </button>
      </p>    
    </div>
  );
}