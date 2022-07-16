import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const history = useHistory();

  useEffect(() => {
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    const SIX = 6;
    if (password.length > SIX && emailRegex.test(email)) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [email, password]);

  const handleClick = (e) => {
    e.preventDefault();
    const userEmail = { email };
    localStorage.setItem('user', JSON.stringify(userEmail));
    history.push('/acoes');
  };

  return (
    <div>
      <form>
        <input
          placeholder="Email"
          type="email"
          onChange={ ({ target }) => setEmail(target.value) }
        />
        <input
          type="password"
          placeholder="Password"
          onChange={ ({ target }) => setPassword(target.value) }
        />
        <button
          type="submit"          
          disabled={ isDisabled }
          onClick={ handleClick }
        >
          Entrar
        </button>
      </form>      
    </div>
  );
}