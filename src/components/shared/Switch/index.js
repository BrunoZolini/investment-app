import styled from 'styled-components';

export const BlueSwitch = styled.button`
  width: 100%;
  font-size: 200%;
  background-color: #C0C0C050;
  font-weight: 900;
  transition: all 0.2s ease-in;
  outline: none;
  border: none;
  padding: 0 8px;
  :hover {
    background-color: #0000FF80;
  }
  :active {
    background-color: #0000FF;
  }
  :disabled {
    background-color: #0000FF80;
  }
`;

export const RedSwitch = styled.button`
  width: 100%;
  font-size: 200%;
  background-color: #C0C0C050;
  font-weight: 900;
  transition: all 0.2s ease-in;
  outline: none;
  border: none;
  padding: 0 8px;
  :hover {
    background-color: #FF000080;
  }
  :active {
    background-color: #FF0000;
  }
  :disabled {
    background-color: #FF000080;
  }
`;