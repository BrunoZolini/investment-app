import React, { useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import context from '../../context/myContext';
import * as C from './styles';

export default function UserHeaderBar() {
  const history = useHistory();

  const { setCurrentUser } = useContext(context);
  return (
    <C.Container>
      <NavLink to="/acoes">Ações</NavLink>
      <NavLink to="/banco">Depósitos/Retiradas</NavLink>
      <button
        type="button"
        onClick={() => {
          localStorage.setItem('currentUser', JSON.stringify({}));
          setCurrentUser({});
          history.push('/');
        }}
      >
        Sair
      </button>
    </C.Container>
  );
}
