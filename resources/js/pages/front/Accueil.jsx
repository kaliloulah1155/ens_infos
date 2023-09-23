import React from 'react'
import { Container } from 'react-bootstrap';
import SlideShow from '../../layouts/SlideShow';

export default function Accueil() {
  return (
    <Container fluid>
      <h1 className="text-center my-4">Trouvez les meilleurs enseignants en Cote d'Ivoire</h1>
      <SlideShow />
    </Container>
  )
}
