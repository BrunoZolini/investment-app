import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
    color: ${({ theme }) => theme.colors.color}
  }

  body {
    background-color: ${(props) => props.theme.colors.background};
    font-size: 16px;
    padding-top: 85px;
  }

  button {
    cursor: pointer;
    :disabled {
      cursor: default;
    }
  }
`;
