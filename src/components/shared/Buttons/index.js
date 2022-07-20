import styled from 'styled-components'

export const ButtonDefault = styled.button`
  width: 100%;
  height: 100%;
  color: #000000;
  margin-bottom: 5%;
  background-color: ${({theme}) => theme.colors.primary.main };
  border: none;
  border-radius: 5px;
  font-size: 140%;
  transition: all 0.2s ease-in;
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
  width: 100%;
  height: 100%;
  color: #e9d700;
  background-color: #00000080;
  border: 1px solid #e9d700;
  border-radius: 5px;
  font-size: 140%;
  transition: all 0.2s ease-in;
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