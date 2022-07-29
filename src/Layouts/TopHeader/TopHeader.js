import React from 'react';
import { Container,Row ,Col } from 'react-bootstrap';
import mainLogo from '../../Assest/comcosoftLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import "./TopHeader.css";

const TopHeader = () => {
    return (
        <div className='top-header-container'>
           <Container>
      <Row>
        <Col sm={12} md={2}>
          <div>
            <img src={mainLogo} alt="main logo" />
          </div>
        </Col>
        <Col sm={12} md={4} >
          <div className='top-address d-flex  '>
          <div className='header-top-icon'>
          <FontAwesomeIcon icon={faLocationDot} />
          </div>
          <div>
          <h6>Address</h6>
          <p>Registered Office: House #30, Purana Paltan (Ground-Floor), Dhaka – 1000, Bangladesh.</p>

          </div>
          </div>
        </Col>
        <Col sm={12} md={3}>
        <div className='top-address d-flex '>
          <div className='header-top-icon'>
        <FontAwesomeIcon icon={faEnvelope} />
          </div>
          <div>
          <h6>Email</h6>
          <p>comcosoftltd@gmail.com</p>

          </div>
          </div>
        </Col>
        <Col sm={12} md={3}>
        <div className='top-address d-flex'>
          <div className='header-top-icon'>
        <FontAwesomeIcon icon={faPhone} />
          </div>
          <div>
          <h6>Phone</h6>
          <p>+8801648949086</p>
          <p>+8801819133579</p>

          </div>
          </div>
        </Col>
      </Row>
    </Container> 
        </div>
    );
};

export default TopHeader;

