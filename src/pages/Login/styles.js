import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 550px;  
  max-width: 1980px;
  width: 100vw;
  div {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 80%;
    justify-content: space-around;
    width: 100%;
    form {
      display: flex;
      flex-direction: column;
      height: 100%;
      justify-content: space-around;
      max-width: 500px;
      max-height: 200px;
      min-width: 200px;
      width: 80%;
      input {
        background-color: transparent;
        border-radius: 10px;
        border: 2px solid #ffffff40;
        color: #ffff00;
        font-size: 130%;
        height: 100%;
        margin-bottom: 5%;
        outline: none;
        padding-left: 3%;
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
    p {
      font-size: large;
      a {
        font-weight: 700;
      }
    }
    
    img {
      border-radius: 20px;
      margin-bottom: 50px;
      max-width: 400px;
      width: 80%;
    }
    
    p {
      margin: 10px;
      a {
        margin: 10px;
        color: #ffff00;
      }
    }
  }
  span {
    background-color: #ff6565;
    border: 2px solid #ae1010;
    font-weight: bold;
    max-width: 500px;
    min-width: 200px;
    padding: 20px;
    width: 80%;
    position: fixed;
    top: 20px;
  }
  `;
