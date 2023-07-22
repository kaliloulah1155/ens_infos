import React,{useState} from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
export default function RegisterModal({ show, handleClose }) {

    const [showPassword, setShowPassword] = useState(false);

    const [showPasswordConf, setShowPasswordConf] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
    };
    const togglePasswordConfVisibility = () => {
        setShowPasswordConf((prevState) => !prevState);
    };
  return (
      <Modal show={show} onHide={handleClose} keyboard={false}
          backdrop="static">
          <Modal.Header closeButton>
              <Modal.Title className="w-100 text-center">Inscription</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <Form>
                  <Form.Group controlId="name">
                      <Form.Label>Nom</Form.Label>
                      <Form.Control type="text" placeholder="Saisissez votre nom" />
                  </Form.Group>
                  <Form.Group controlId="firstName" className='my-1'>
                      <Form.Label>Prénoms</Form.Label>
                      <Form.Control type="text" placeholder="Saisissez vos prénoms" />
                  </Form.Group>
                  <Form.Group controlId="email" className='my-1'>
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" placeholder="Saisissez votre email" />
                  </Form.Group>
                  <Form.Group controlId="phoneNumber" className='my-1'>
                      <Form.Label>Numéro de téléphone</Form.Label>
                      <Form.Control type="tel" placeholder="Saisissez votre numéro de téléphone" />
                  </Form.Group>
                  <Form.Group controlId="password" className='my-1'>
                      <Form.Label>Mot de passe</Form.Label>
                      <Form.Control 
                          type={showPassword ? 'text' : 'password'}
                      placeholder="Saisissez votre mot de passe"
                       />
                      <div className="password-toggle-icon-container" onClick={togglePasswordVisibility}>
                          {showPassword ? <FaEyeSlash className="password-toggle-icon" /> : <FaEye className="password-toggle-icon" />}
                      </div>
                  </Form.Group>
                  <Form.Group controlId="confirmPassword" className='my-1'>
                      <Form.Label>Confirmation de mot de passe</Form.Label>
                      <Form.Control
                          type={showPasswordConf ? 'text' : 'password'}
                          placeholder="Confirmez votre mot de passe" />
                      <div className="password-conf-toggle-icon-container" onClick={togglePasswordConfVisibility}>
                          {showPasswordConf ? <FaEyeSlash className="password-toggle-icon" /> : <FaEye className="password-toggle-icon" />}
                      </div>
                  </Form.Group>
                  <Form.Group controlId="gender" className='my-1'>
                      <Form.Label>Sexe</Form.Label>
                      <Form.Control as="select">

                          <option value="M">M</option>
                          <option value="F" >F</option>
                      </Form.Control>
                  </Form.Group>
                  <Form.Group controlId="userType" className='my-1'>
                      <Form.Label>Sélectionnez le type d'utilisateur :</Form.Label>
                      <div>
                          <Form.Check type="radio" label="Je suis un enseignant" name="userType" value="teacher" id="teacher" defaultChecked />
                          <Form.Check type="radio" label="Je suis un établissement" name="userType" value="institution" id="institution" />
                      </div>
                  </Form.Group>


              </Form>
          </Modal.Body>
          <Modal.Footer className="d-flex justify-content-center">
              <Button variant="primary" >
                  S'inscrire
              </Button>
          </Modal.Footer>
      </Modal>
  )
}
