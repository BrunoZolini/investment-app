import React, { useState, useEffect, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { ButtonDefault } from '../../components/shared/Buttons';
import context from '../../context/myContext';
import * as C from './styles';
import LogoCompleta from '../../assets/images/LogoCompleta.png';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState('');
  const [deniedUser, setDeniedUser] = useState(false);
  const { setCurrentUser } = useContext(context);

  const history = useHistory();

  useEffect(() => {
    const usersStorage = JSON.parse(localStorage.getItem('users')) || [];
    setUsers(usersStorage);

    if (usersStorage.length) {
      const lastUser = usersStorage.reduce((acc, curr) =>
        acc.lastConnection > curr.lastConnection ? acc : curr
      );
      setEmail(lastUser.email);
    }
  }, []);

  const saveUserLogin = () => {
    const user = users.find((item) => item.email === email);
    user.lastConnection = new Date();
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('currentUser', JSON.stringify(user));
    setCurrentUser(user);
  };

  const handleLogIn = (e) => {
    e.preventDefault();
    if (
      users.some((user) => user.email === email && user.password === password)
    ) {
      saveUserLogin();
      history.push('/acoes');
    } else {
      setDeniedUser(true);
    }
  };

  return (
    <C.Container>
        {deniedUser && <span> Email ou senha inválidos</span>}
      <div>
        <img src={LogoCompleta} alt="BZ-investment-logo" />
        <form>
          <input
            placeholder="exemplo@exemplo.com"
            type="email"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={({ target }) => setPassword(target.value)}
          />
          <ButtonDefault type="submit" onClick={handleLogIn}>
            Entrar
          </ButtonDefault>
        </form>
        <p>
          Não tem uma conta?
          <Link to="/cadastro">Cadastrar</Link>
        </p>
      </div>
    </C.Container>
  );
}
