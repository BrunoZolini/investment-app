import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  max-width: 1980px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SwitchContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const Content = styled.div`
  height: 600px;
  width: 100%;
  max-width: 600px;
  background-color: #4e4c4c60;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  margin-top: 5%;

  h2 {
    width: 100%;
    background-color: ${(props) => props.color};
    text-align: center;
    padding: 8%;
    margin-bottom: 10%;
  }

  label {
    padding: 20px;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    font-size: 150%;
    color: #ffffff90;
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
      border: 2px solid #ffffff40;
      font-size: 100%;
      padding-left: 1%;
      transition: all 0.4s ease-in-out;
      ::placeholder {
        color: #ffffff40;
      }
      :valid {
        color: #ffff00;
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

  span {
    width: 80%;
    min-width: 200px;
    max-width: 250px;
    font-weight: bold;
    background-color: #7bff5a;
    border: 2px solid #00ff00;
    padding: 20px;
  }
`;

export const Operation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20% 0;
  padding-bottom: 5%;
  background-color: #4e4c4c;
`;
