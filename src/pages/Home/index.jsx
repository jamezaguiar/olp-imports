import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import { Container, ImageContainer, Card } from './styles';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get('/').then((response) => setProducts(response.data));
  }, []);

  return (
    <Container>
      {products.map((product) => (
        <Card key={product._id}>
          <ImageContainer>
            <img src={product.image_url} alt={product.name} />
          </ImageContainer>
          <h4>{product.name}</h4>
          <span>{product.brand}</span>
          <p>R${product.price}</p>
        </Card>
      ))}
    </Container>
  );
}
