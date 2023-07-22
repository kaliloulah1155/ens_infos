import React,{useState} from 'react'
import { Modal, Form, Button } from 'react-bootstrap';
import { FaEye, FaEyeSlash } from 'react-icons/fa';



export default function LoginModal({ show, handleClose }) {

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
    };
     
  return (
      <Modal show={show} onHide={handleClose} keyboard={false}
          backdrop="static">
       
          <Modal.Header closeButton>
              <Modal.Title className="w-100 text-center" >Connexion</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <Form>
                  <Form.Group controlId="email">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                          type="email"
                          placeholder="Saisissez votre email"
                         
                      />
                  </Form.Group>
                  <Form.Group className='my-2' controlId="password">
                      <Form.Label>Mot de passe</Form.Label>
                      <Form.Control
                          type={showPassword ? 'text' : 'password'}
                          placeholder="Saisissez votre mot de passe"
                      />
                      <div className="password-login-toggle-icon-container" onClick={togglePasswordVisibility}>
                          {showPassword ? <FaEyeSlash className="password-toggle-icon" /> : <FaEye className="password-toggle-icon" />}
                      </div>
                  </Form.Group>

              </Form>
          </Modal.Body>
          <Modal.Footer className="d-flex justify-content-center">
              <Button variant="primary" >
                  Se connecter
              </Button>
          </Modal.Footer>
      </Modal> )
  
}
