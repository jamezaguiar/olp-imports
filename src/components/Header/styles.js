import styled, { css } from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 32px;
`;

export const Links = styled.nav`
  a {
    text-decoration: none;
    font-size: 18px;
    color: #000;

    &:not(:last-child) {
      margin-right: 32px;
    }

    &:hover {
      text-decoration: underline;
    }
  }
`;
