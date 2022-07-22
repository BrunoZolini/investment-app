import styled from 'styled-components';

export const Code = styled.td`
  background-color: yellow;
  border-radius: 5px;
  color: black;
  font-weight: 700;
`;

export const Name = styled.td`
  background-color: #ff8000;
  border-radius: 5px;
  color: black;
  font-weight: 500;
`;

export const UnitValue = styled.td`
  background-color: #a0c0c0;
  border-radius: 5px;
  color: black;
  font-weight: 700;
`;

export const Quantity = styled.td`
  background-color: #c0c0c0;
  border-radius: 5px;
  color: black;
  font-weight: 700;
`;

export const TotalValue = styled.td`
  background-color: #009900;
  border-radius: 5px;
  color: black;
  font-weight: 700;
`;

export const Table = styled.table`
  padding: 10px;
  width: 100%;
  tr {
    text-align: center;
    width: 100%;
    white-space: nowrap;
  }
  th {
    background-color: #4e4c4c70;
    border-radius: 5px;
    padding: 4px;
  }

  @media (max-width: 700px) {
    font-size: 12px;
  }
  @media (max-width: 550px) {
    font-size: 7px;
  }
`;
