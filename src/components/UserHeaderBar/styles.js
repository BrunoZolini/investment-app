import styled from 'styled-components';

export const Container = styled.nav`
  align-items: center;
  background-color: #1A1A1A;
  display: flex;
  flex-direction: column;
  padding: 50px;
  position: absolute;
  right: 0;
  top: 85px;
  width: 300px;
  a {
    color: white;
    font-size: 18px;
    padding: 5px 20px 5px 0;
    text-decoration: none;
    transition: all 0.2s ease-in;
    :hover {
      color: #ffff0080;
    }
    :focus {
      color: #ffff00;
    }
    &.active {
      color: #ffff00;
    }
  }
  button {
    background-color: transparent;
    border: none;
    color: white;
    font-size: 18px;
    outline: none;
    padding: 5px 20px 5px 0;
    text-decoration: none;
    transition: all 0.2s ease-in;
    :hover {
      color: #ffff0080;
    }
    :focus {
      color: #ffff00;
    }
  }
`;
