import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 32px;

  a {
    text-decoration: none;
    font-size: 18px;
    color: #f03910;

    &:not(:last-child) {
      margin-right: 32px;
    }

    &:hover {
      text-decoration: underline;
    }
  }
`;
