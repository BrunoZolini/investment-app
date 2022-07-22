import styled from 'styled-components';

export const ButtonDefault = styled.button`
  background-color: ${({ theme }) => theme.colors.primary.main};
  border: 1px solid #000000;
  border-radius: 5px;
  color: #000000;
  font-size: 120%;
  height: 100%;
  margin-bottom: 5%;
  min-width: 110px;
  transition: all 0.2s ease-in;
  width: 100%;
  :hover {
    background-color: #e9d700;
  }
  :active {
    background-color: #dab600;
  }
  :disabled {
    background-color: #fff9ae;
    color: #00000040;
  }
`;

export const ButtonBack = styled.button`
  background-color: #00000080;
  border: 1px solid #e9d700;
  border-radius: 5px;
  color: #e9d700;
  font-size: 120%;
  height: 100%;
  margin-right: 5%;
  min-width: 110px;
  transition: all 0.2s ease-in;
  width: 100%;
  :hover {
    background-color: #000000;
  }
  :active {
    background-color: #000000;
    border: 2px solid #e9d700;
  }
  :disabled {
    background-color: #00000040;
    color: #00000040;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  margin-top: 35px;
  width: 80%;
`;
