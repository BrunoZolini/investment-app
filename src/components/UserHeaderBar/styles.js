import styled from 'styled-components';

export const Container = styled.nav`
  background-color: ${({ theme }) => theme.colors.primary.background}80;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  position: absolute;
  top: 80px;
  right: 0;
  a {
    text-decoration: none;
    color: white;
    font-size: 18px;
    padding: 5px 20px 5px 0;
    transition: all 0.2s ease-in;
    :hover {
      color: #ffff0080;
    }
    :focus {
      color: #ffff00;
    }
    &.active {
      color: #ffff00;
    }
  }
`;
