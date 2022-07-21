import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  max-width: 1980px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  height: 100vh;
  max-height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #4e4c4c;
  margin-top: 2%;
  
`;

export const Operation = styled.div`
  height: 80%;
  max-height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5px;
  h2 {
    width: 100%;
    background-color: ${(props) => props.operationColor };
    text-align: center;
    padding: 8%;
    margin-bottom: 10%;
  }
  p {
    color: #ffff00;
    font-size: 120%;
    span {
      color: #ffff00;
      font-weight: 900;
    }
  }
  label {
      padding: 0 20px;
      display: flex;
      flex-direction: column;
      margin-bottom: 10px;
      font-size: 150%;
      color: #ffff0080;
      :focus-within {
        color: #ffff00;
      }
      :hover {
        color: #ffff00;
      }
      input {
        height: 100%;
        width: 100%;
        outline: none;
        background-color: transparent;
        border-radius: 10px;
        color: #ffff00;
        border: 2px solid #ffff0080;
        font-size: 100%;
        padding-left: 1%;
        transition: all 0.4s ease-in-out;
        ::placeholder {
          color: #ffff0080;
        }
        :valid {
          color: #ffff0080;
        }
        :hover {
          border: 2px solid #ffff0080;
          color: #ffff0080;
        }
        :focus {
          border: 2px solid #ffff00;
          color: #ffff00;
        }
      }
    }
  
`;

export const ButtonsContainer = styled.div`
  display: flex;
  width: 80%;
  margin-top: 35px;
`;

export const Confirm = styled.div`
  width: 80%;
  min-width: 200px;
  max-width: 250px;
  font-weight: bold;
  background-color: #7bff5a;
  border: 2px solid #00ff00;
  padding: 10px;
`;