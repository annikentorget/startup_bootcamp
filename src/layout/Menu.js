import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import AVT from '../images/AVT.svg'

function NavbarFunction() {
  return (
    <>
      <Container fluid>
        <Navbar expand="lg" variant="dark" bg="dark">
          <Container>
            <Navbar.Brand href="#"><img className="AVT" src={AVT} alt="logo"/></Navbar.Brand>
          </Container>
        </Navbar>
      </Container>
    </>
  );
}

export default NavbarFunction;
