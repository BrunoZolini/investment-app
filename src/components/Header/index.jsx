import React, { useContext, useEffect, useState } from 'react';
import context from '../../context/myContext';
import UserHeaderBar from '../UserHeaderBar';
import LogoSimples from '../../assets/images/LogoSimples.png';
import Menu from '../../assets/images/Menu.svg';
import closeMenu from '../../assets/images/closeMenu.svg';
import * as C from './styles';

export default function Header() {
  const [isUserClicked, setIsUserClicked] = useState(false);
  const [loading, setLoading] = useState(false);
  const { currentUser } = useContext(context);

  useEffect(() => {
    setLoading(true);
  }, [currentUser]);

  return (
    <C.Container>
      <img src={LogoSimples} alt="BZInvestimentos-logo" />
      {loading && (
        <C.Aside>
          <div>
            <C.User>
              <span>{currentUser.name[0].toUpperCase()}</span>
              <p>{currentUser.name}</p>
            </C.User>
            <C.Balance>
              Seu Saldo <span>R$: {parseFloat(currentUser.accountBalance).toFixed(2)}</span>
            </C.Balance>
          </div>
          <C.MenuButton
            type="button"
            onClick={() => setIsUserClicked(!isUserClicked)}
          >
            <img src={isUserClicked ? closeMenu : Menu} alt="" />
          </C.MenuButton>
          {isUserClicked && <UserHeaderBar />}
        </C.Aside>
      )}

    </C.Container>
  );
}