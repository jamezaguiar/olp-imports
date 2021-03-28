import React, { useEffect, useState } from 'react';

import api from '../../services/api';

import { Container, Card, ImageContainer } from './styles';

export default function Smartphones() {
  const [smartphones, setSmartphones] = useState([]);

  useEffect(() => {
    api.get('/phones').then((response) => setSmartphones(response.data));
  }, []);

  return (
    <Container>
      {smartphones.map((smartphone) => (
        <Card key={smartphone._id}>
          <ImageContainer>
            <img src={smartphone.image_url} alt={smartphone.name} />
          </ImageContainer>
          <h4>{smartphone.name}</h4>
          <span>{smartphone.brand}</span>
          <p>R${smartphone.price}</p>
        </Card>
      ))}
    </Container>
  );
}
