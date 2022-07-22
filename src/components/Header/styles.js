import styled from 'styled-components';

export const Container = styled.header`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary.background};
  display: flex;
  height: 85px;
  justify-content: space-between;
  left: 0;
  padding: 20px;
  position: fixed;
  top:0;
  width: 100%;
  img {
    margin-left: 20px;
    max-width: 60px;
  }
`;

export const Aside = styled.div`
  display: flex;
  min-width: 220px;
`;

export const Teste = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
`;

export const User = styled.div`
  align-items: center;
  background-color: #4e4c4c;
  border: 2px solid yellow;
  border-radius: 30px;
  display: flex;
  font-weight: bold;
  max-width: 150px;
  margin-bottom: 5px;
  padding: 5px 25px 5px 5px;
  span {
    background-color: yellow;
    border: 2px solid yellow;
    border-radius: 100%;
    color: black;
    font-size: 140%;
    margin-right: 25px;
    padding: 3%;
  }
`;

export const Balance = styled.p`
  font-weight: 500;
  width: 100%;
  white-space: nowrap;
  span {
    font-size: large;
    font-weight: 900;
  }
`;

export const MenuButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary.background};
  border: none;
  margin-left: 5px;
  margin-right: 10px;
  outline: none;
`;
