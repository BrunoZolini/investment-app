import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  max-width: 1980px;
  height: 100vh;
  display: flex;
  align-items: center;
  div {
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    form {
      width: 80%;
      height: 80%;
      min-width: 200px;
      max-width: 500px;
      max-height: 200px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      input {
        height: 100%;
        width: 100%;
        margin-bottom: 5%;
        outline: none;
        background-color: transparent;
        border-radius: 10px;
        color: #ffff00;
        border: 2px solid #ffffff40;
        font-size: 130%;
        padding-left: 3%;
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
    p {
      font-size: large;
      a {
        font-weight: 700;
      }
    }
    span {
      width: 80%;
      min-width: 200px;
      max-width: 500px;
      font-weight: bold;
      background-color: #ff6565;
      border: 2px solid #ae1010;
      padding: 20px;
    }

    img {
      width: 80%;
      max-width: 400px;
      border-radius: 20px;
      margin-bottom: 5px;
    }

    p {
      margin: 10px;
      a {
        margin: 10px;
        color: #ffff00;
      }
    }
  }
`;
