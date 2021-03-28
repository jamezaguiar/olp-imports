import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';

import api from '../../services/api';

import { Container, Card, ImageContainer } from './styles';

import BrandNavigator from '../../components/BrandNavigator';

export default function Smartphones() {
  const { params } = useRouteMatch(); // { brand: string }
  const [smartphones, setSmartphones] = useState([]);

  useEffect(() => {
    if (params.brand) {
      api
        .get(`/phones/${params.brand}`)
        .then((response) => setSmartphones(response.data));
    } else {
      api.get('/phones').then((response) => setSmartphones(response.data));
    }
  }, [params.brand]);

  return (
    <>
      <BrandNavigator
        currentRoute="/smartphones"
        brands={['Samsung', 'Motorola', 'Asus', 'Xiaomi', 'Apple']}
      />
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
    </>
  );
}
