import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  max-width: 1980px;
  width: 100vw;
`;

export const SwitchContainer = styled.div`
  display: flex;
  left: 0;  
  top: 85px;
  width: 100%;
`;

export const Content = styled.div`
  align-items: center;
  background-color: #4e4c4c60;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  height: 470px;
  justify-content: center;
  margin-top: 20px;
  max-width: 600px;
  width: 100%;
  h2 {
    background-color: ${(props) => props.color};
    margin-bottom: 10%;
    padding: 8%;
    text-align: center;
    width: 100%;
  }
  label {
    color: #ffffff90;
    display: flex;
    flex-direction: column;
    font-size: 150%;
    margin-bottom: 10px;
    padding: 20px;
    :focus-within {
      color: #ffff00;
    }
    :hover {
      color: #ffff00;
    }
    input {
      background-color: transparent;
      border: 2px solid #ffffff40;
      border-radius: 10px;
      color: #ffff00;
      font-size: 100%;
      height: 100%;
      outline: none;
      padding-left: 1%;
      transition: all 0.4s ease-in-out;
      width: 100%;
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
    background-color: #7bff5a;
    border: 2px solid #00ff00;
    font-weight: bold;
    min-width: 200px;
    max-width: 250px;
    padding: 20px;
    width: 80%;
  }
`;

export const Operation = styled.div`
  align-items: center;
  background-color: #4e4c4c;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20% 0;
  padding-bottom: 5%;
`;
