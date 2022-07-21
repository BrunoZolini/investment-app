import styled from 'styled-components';

export const Code = styled.td`
  background-color: yellow;
  color: black;
  border-radius: 5px;
  font-weight: 700;
`;

export const Name = styled.td`
  background-color: #FF8000;
  color: black;
  border-radius: 5px;
  font-weight: 500;
`;

export const UnitValue = styled.td`
  background-color: #A0C0C0;
  color: black;
  border-radius: 5px;
  font-weight: 700;
`;

export const Quantity = styled.td`
  background-color: #C0C0C0;
  color: black;
  border-radius: 5px;
  font-weight: 700;
`;

export const TotalValue = styled.td`
  background-color: #009900;
  color: black;
  border-radius: 5px;
  font-weight: 700;
`;

export const Table = styled.table`
  padding: 10px;
  width: 100%;
  tr {
    width: 100%;
    text-align: center;
    white-space: nowrap;
    
  }
  th {
    background-color: #4e4c4c70;
    border-radius: 5px;
    padding: 4px;
  }  

  @media(max-width: 700px) {
    font-size: 12px;
  }
  @media(max-width: 550px) {
    font-size: 7px;
  }
`;


