import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import context from '../../context/myContext';
import * as C from './styles';

export default function UserHeaderBar() {
  const { setCurrentUser } = useContext(context);
  return (
    <C.Container>
      <NavLink to="/acoes">Ações</NavLink>
      <NavLink to="/banco">Depósitos/Retiradas</NavLink>
      <NavLink
        to="/login"
        onClick={() => {
          localStorage.setItem('currentUser', JSON.stringify({}));
          setCurrentUser({});
        }}
        >
        Sair
      </NavLink>
    </C.Container>
  );
}
