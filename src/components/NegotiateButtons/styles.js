import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Buy = styled.button`
  background-color: #0000ff60;
  border: none;
  border-radius: 100px;
  font-size: 100%;
  font-weight: 900;
  margin: 0 2px;
  outline: none;
  padding: 0 8px;
  transition: all 0.2s ease-in;
  :hover {
    background-color: #0000ff;
  }
  :active {
    background-color: #0000ff60;
  }
`;

export const Sell = styled.button`
  background-color: #ff000060;
  border: none;
  border-radius: 100px;
  font-size: 100%;
  font-weight: 900;
  margin: 0 2px;
  outline: none;
  padding: 0 8px;
  transition: all 0.2s ease-in;
  :hover {
    background-color: #ff0000;
  }
  :active {
    background-color: #ff000060;
  }
  :disabled {
    color: #c0c0c0;
    background-color: #c0c0c050;
  }
`;
