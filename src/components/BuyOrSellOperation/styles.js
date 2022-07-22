import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-width: 1980px;
  width: 100vw;
`;

export const Content = styled.div`
  align-items: center;
  background-color: #4e4c4c;
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin-top: 2%;
  max-height: 300px;
`;

export const Operation = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 80%;
  margin-bottom: 5px;
  max-height: 200px;
  h2 {
    background-color: ${(props) => props.color};
    padding: 8%;
    text-align: center;
    margin-bottom: 10%;
    width: 100%;
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
    color: #ffff0080;
    display: flex;
    flex-direction: column;
    font-size: 150%;
    margin-bottom: 10px;
    padding: 0 20px;
    :focus-within {
      color: #ffff00;
    }
    :hover {
      color: #ffff00;
    }
    input {
      background-color: transparent;
      border: 2px solid #ffff0080;
      border-radius: 10px;
      color: #ffff00;
      font-size: 100%;
      height: 100%;
      outline: none;
      padding-left: 1%;
      transition: all 0.4s ease-in-out;
      width: 100%;
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

export const Confirm = styled.div`
  background-color: #7bff5a;
  border: 2px solid #00ff00;
  font-weight: bold;
  max-width: 250px;
  margin-top: 2%;
  min-width: 200px;
  padding: 10px;
  width: 80%;
`;
