import styled from "styled-components";

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
        color: #FFFF00;
        border: 2px solid #ffffff40;
        font-size: 130%;
        padding-left: 3%;
        transition: all 0.4s ease-in-out;
        ::placeholder {
          color: #ffffff40;
        }
        :valid {
          color: #FFFF00;
        }
        :hover {
          border: 2px solid #FFFF0080;
          color: #FFFF0080;
        }
        :focus {
          border: 2px solid #FFFF00;
          color: #FFFF00;
        }
      }
    }

    span {
      width: 80%;
      min-width: 200px;
      max-width: 500px;
      font-weight: bold;
      background-color: #FF6565;
      border: 2px solid #AE1010;
      padding: 20px;
    }
  
    p {
      margin: 10px;
      a{
        margin: 10px;
        color: #FFFF00;
      }
    }
  }
`;

