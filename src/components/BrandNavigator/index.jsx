import React from 'react';

import { Link } from 'react-router-dom';

import { Container } from './styles';

export default function BrandNavigator(props) {
  return (
    <Container>
      {props.brands.map((brand) => (
        <Link key={brand} to={`${props.currentRoute}/${brand}`}>
          {brand}
        </Link>
      ))}
    </Container>
  );
}
