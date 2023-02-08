import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BsSearch } from 'react-icons/bs';
import { MdAccountBox } from 'react-icons/md';
import { AiFillShopping } from 'react-icons/ai';
import Offcanvas from 'react-bootstrap/Offcanvas';

function OffCanvas({ placement, ...props }) {
    const [show, setShow] = useState(false);
    const toggleOffCanvas = () => setShow(!show);

    return (
        <>
            <Button variant="link" onClick={toggleOffCanvas}>
                <FaBars size={20} />
            </Button>
            <Offcanvas show={show} onHide={toggleOffCanvas} placement="right" {...props} style={{height: '100vh'}}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body style={{height: '100vh'}}>
                    <Nav>
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
                            aria-label="Search" />
                        <Button variant="outline-danger">
                            <BsSearch size={24} color="#fff" />
                        </Button>
                    </Form>
                    <Button variant="outline-danger" style={{ marginRight: '15px', marginLeft: '15px' }}>
                        <MdAccountBox size={24} color="#fff" />
                    </Button>
                    <Button variant="outline-danger">
                        <AiFillShopping size={24} color="#fff" />
                    </Button>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}
export default OffCanvas;
