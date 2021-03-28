import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;

  padding: 16px;
`;

export const Card = styled.div`
  background-color: #fff;
  padding: 16px;

  border-radius: 8px;

  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

  img {
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  h4 {
    font-weight: 600;
    font-size: 24px;
  }

  span {
    color: #aaa;
  }

  p {
    color: #43aa8b;
  }
`;

export const ImageContainer = styled.div`
  /* height: 50%; */
  padding-top: 56.25%; /* 16:9 */

  overflow: hidden;
  position: relative;

  margin-bottom: 16px;
`;
