import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

import { CartWidget } from "./CartWidget"

export const NavBar = () => {
    return (  <Navbar bg="dark" data-bs-theme="dark">
    <Container>
    <img src="/src/assets/img/eminem logo.png" width="60" alt="eminemlogo" class="logo"></img>
      <Navbar.Brand as={NavLink} to="/">EMINEM SHOP</Navbar.Brand> {/* Actualiza el enlace para que apunte a la ruta de todas las categorías */}
      
      <Nav className="me-auto">
        <Nav.Link to="/category/Hombre" as={NavLink}>Hombre</Nav.Link>
        <Nav.Link to="/category/Mujer" as={NavLink}>Mujer</Nav.Link>
        <Nav.Link to="/category/Accesorios" as={NavLink}>Accesorios</Nav.Link>
      </Nav>
      <CartWidget />
    </Container>
  </Navbar>

    );

}