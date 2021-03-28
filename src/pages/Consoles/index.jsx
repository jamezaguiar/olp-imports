import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';

import api from '../../services/api';

import { Container, Card, ImageContainer } from './styles';

import BrandNavigator from '../../components/BrandNavigator';

export default function Consoles() {
  const { params } = useRouteMatch(); // { brand: string }
  const [consoles, setConsoles] = useState([]);

  useEffect(() => {
    if (params.brand) {
      api
        .get(`/consoles/${params.brand}`)
        .then((response) => setConsoles(response.data));
    } else {
      api.get('/consoles').then((response) => setConsoles(response.data));
    }
  }, [params.brand]);

  return (
    <>
      <BrandNavigator
        currentRoute="/consoles"
        brands={['Microsoft', 'Sony', 'Nintendo']}
      />
      <Container>
        {consoles.map((console) => (
          <Card key={console._id}>
            <ImageContainer>
              <img src={console.image_url} alt={console.name} />
            </ImageContainer>
            <h4>{console.name}</h4>
            <span>{console.brand}</span>
            <p>R${console.price}</p>
          </Card>
        ))}
      </Container>
    </>
  );
}
