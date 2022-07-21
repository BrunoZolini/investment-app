import styled from 'styled-components';

export const Container = styled.header`
  background-color: ${({ theme }) => theme.colors.primary.background};
  height: 85px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  img {
    max-width: 60px;
    margin-left: 20px;
  }
`;

export const Aside = styled.div`
  display: flex;
  min-width: 220px;
`

export const User = styled.div`
  max-width: 150px;
  display: flex;
  border: 2px solid yellow;
  border-radius: 30px;
  padding: 5px 5px 5px 5px;
  align-items: center;
  margin-bottom: 5px;
  font-weight: bold;
  background-color: #4E4C4C;
  span {
    color: black;
    background-color: yellow;
    border: 2px solid yellow;
    border-radius: 100%;
    padding: 3%;
    font-size: 140%;
    margin-right: 25px;
  }
`

export const Balance = styled.p`
  width: 100%;
  font-weight: 500;
  white-space: nowrap;
  span {
    font-weight: 900;
    font-size: large;
  }

`;

export const MenuButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary.background};
  outline: none;
  border: none;
  margin-left: 5px;
  margin-right: 10px;
`
