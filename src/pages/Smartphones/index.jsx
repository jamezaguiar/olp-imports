import React from 'react';

import { Container, Card, ImageContainer } from './styles';

export default function Smartphones() {
  return (
    <Container>
      <Card>
        <ImageContainer>
          <img
            src="https://img.ibxk.com.br/2019/04/10/10115741942666.jpg"
            alt="Galaxy A10"
          />
        </ImageContainer>
        <h4>Samsung Galaxy A10</h4>
        <span>Samsung</span>
        <p>R$1000</p>
      </Card>
    </Container>
  );
}
