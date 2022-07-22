import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  display: flex;
  height: 0;
  max-width: 1980px;
  width: 100vw;
`;

export const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 10%;
  width: 100%;
  h1 {
    color: #fff;
    font-size: 400%;
    font-weight: 800;
  }
  form {
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: 5%;
    width: 100%;

    label {
      color: #ffffff90;
      display: flex;
      flex-direction: column;
      font-size: 150%;
      margin-bottom: 10px;
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
    div {
      height: 50px;
    }
  }
  span {
    background-color: #7bff5a;
    border: 2px solid #00ff00;
    font-weight: bold;
    max-width: 250px;
    min-width: 200px;
    padding: 20px;
    width: 80%;
  }
`;
