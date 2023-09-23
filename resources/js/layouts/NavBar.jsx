import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { Navbar, Nav, Container, Row, Col, Form, Button, Modal, Image } from 'react-bootstrap';
import LoginModal from '../pages/front/auth/LoginModal';
import RegisterModal from '../pages/front/auth/RegisterModal';
import '../pages/front/auth/passwordInputStyles.css'

 
export default function NavBar() {
    // State pour afficher le modal de connexion
    const[showLoginModal, setShowLoginModal] = useState(false);
    // State pour afficher le modal d'inscription
    const [showRegisterModal, setShowRegisterModal] = useState(false);

    const handleShowLoginModal = () => {
        setShowLoginModal(true);
    };

    const handleCloseLoginModal = () => {
        setShowLoginModal(false);
    };

    const handleShowRegisterModal = () => {
        setShowRegisterModal(true);
    };

    const handleCloseRegisterModal = () => {
        setShowRegisterModal(false);
    };


  
 
  return (
    <>
          <Navbar bg="dark" variant="dark" expand="md">
              <Container fluid>
                  <Link to="/" className="navbar-brand">
                      <Navbar.Brand className="mr-auto">
                          <Image src="https://cdn.pixabay.com/photo/2016/12/27/13/10/logo-1933884_640.png" width="30" height="30" className="d-inline-block align-top" alt="Fake Logo" />
                          <span className="mx-2">{'Mon enseignant'} </span>
                        </Navbar.Brand>
                </Link>
                  
                  <Nav className="ml-auto">
                      <Nav.Link onClick={() => setShowLoginModal(true)}>Connexion</Nav.Link>
                      <Nav.Link onClick={() => setShowRegisterModal(true)}>Inscription</Nav.Link>
                  </Nav>
              </Container>
          </Navbar>

          
          {/* Modal de Connexion */}
          <LoginModal show={showLoginModal} handleClose={handleCloseLoginModal} />
          {/* Modal d'Inscription */}
          <RegisterModal show={showRegisterModal} handleClose={handleCloseRegisterModal} />

      
    
    </>
  )
}
