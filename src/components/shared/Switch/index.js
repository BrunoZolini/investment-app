import styled from 'styled-components';

export const BlueSwitch = styled.button`
  background-color: #c0c0c050;
  border: none;
  font-size: 200%;
  font-weight: 900;
  outline: none;
  padding: 0 8px;
  transition: all 0.2s ease-in;
  width: 100%;
  :hover {
    background-color: #0000ff80;
  }
  :active {
    background-color: #0000ff;
  }
  :disabled {
    background-color: #0000ff80;
  }
`;

export const RedSwitch = styled.button`
  background-color: #c0c0c050;
  border: none;
  font-size: 200%;
  font-weight: 900;
  outline: none;
  padding: 0 8px;
  transition: all 0.2s ease-in;
  width: 100%;
  :hover {
    background-color: #ff000080;
  }
  :active {
    background-color: #ff0000;
  }
  :disabled {
    background-color: #ff000080;
  }
`;
