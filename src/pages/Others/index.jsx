import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import { Container, Card, ImageContainer } from './styles';

export default function Others() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get('/others').then((response) => setProducts(response.data));
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
          <p>
            {product.price.toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL'
            })}
          </p>
        </Card>
      ))}
    </Container>
  );
}
