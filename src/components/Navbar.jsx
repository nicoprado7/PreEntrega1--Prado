import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { CartWidget } from "./CartWidget"

export const NavBar = () => {
    return (  <Navbar bg="dark" data-bs-theme="dark">
    <Container>
    <img src="/src/assets/img/eminem logo.png" width="60" alt="eminemlogo" class="logo"></img>
      <Navbar.Brand href="#home">EMINEM SHOP</Navbar.Brand>
      
      <Nav className="me-auto">
        <Nav.Link href="#home">Hombre</Nav.Link>
        <Nav.Link href="#features">Mujer</Nav.Link>
        <Nav.Link href="#pricing">Accesorios</Nav.Link>
      </Nav>
      <CartWidget />
    </Container>
  </Navbar>

    );

}