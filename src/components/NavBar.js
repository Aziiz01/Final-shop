import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavBar.css';
import { BsSearch} from 'react-icons/bs';
import {MdAccountBox} from 'react-icons/md';
import {AiFillShopping} from 'react-icons/ai';

function NavBar() {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <Navbar bg="light" expand="lg" expanded={expanded} onToggle={()=> setExpanded(!expanded)}>
      <Container fluid>
        <Navbar.Brand href="#">FASHION</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-toggle" />
        <Navbar.Collapse id="navbar-toggle">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '200px' }}>
            <Nav.Link as={Link} to="/" exact>Home</Nav.Link>
            <NavDropdown title="Products" id="products-dropdown">
              <NavDropdown.Item as={Link} to="/products">eyelash</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="ml-2"
              aria-label="Search"
            />
            <Button variant="outline-danger"><BsSearch size={24} color="#fff"/></Button>
          </Form>
          <Button variant="outline-danger" style={{marginRight:'15px' ,marginLeft:'15px'}}><MdAccountBox size={24} color="#fff" /></Button>
          <Button variant="outline-danger"><AiFillShopping size={24} color="#fff"/></Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;