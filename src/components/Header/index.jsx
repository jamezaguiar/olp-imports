import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Links } from './styles';

import logo from '../../assets/logo.svg';

export default function Header() {
  return (
    <Container>
      <Link to="/smartphones">
        <img src={logo} alt="OLP Imports logo." />
      </Link>
      <Links>
        <Link to="/smartphones">Smartphones</Link>
        <Link to="/consoles">Consoles</Link>
        <Link to="/outros">Outros</Link>
      </Links>
    </Container>
  );
}
