import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  max-width: 1980px;
  height: 100vh;
  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    color: #fff;
    font-size: 400%;
    font-weight: 800;
  }
  form {
    width: 100%;
    padding: 5%;
    display: flex;
    flex-direction: column;
      align-items: center;

    label {
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
    div {
      height: 50px;
    }   
  }
`;
