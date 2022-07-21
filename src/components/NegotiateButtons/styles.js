import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Buy = styled.button`
  font-size: 100%;
  background-color: #0000FF60;;
  font-weight: 900;
  transition: all 0.2s ease-in;
  outline: none;
  border: none;
  border-radius: 100px;
  padding: 0 8px;
  margin: 0 2px;
  :hover {
    background-color: #0000FF;
  }
  :active {
    background-color: #0000FF60;
  }
  
`;

export const Sell = styled.button`
  font-size: 100%;
  background-color: #FF000060;
  font-weight: 900;
  transition: all 0.2s ease-in;
  outline: none;
  border: none;
  border-radius: 100px;
  padding: 0 8px;
  margin: 0 2px;
  :hover {
    background-color: #FF0000;
  }
  :active {
    background-color: #FF000060;
  }
  :disabled {
    color: #C0C0C0;
    background-color: #C0C0C050;
  }
`;