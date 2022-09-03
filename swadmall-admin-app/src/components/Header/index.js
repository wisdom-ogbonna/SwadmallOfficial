import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Admin Dashboard</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        {/* <Nav.Link href="#features">Features</Nav.Link>
                                <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                        {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown> */}
                    </Nav>
                    <Nav>
                        {/* <Nav.Link href="#deets">Home</Nav.Link>
                        <Nav.Link href="#deets">Signin</Nav.Link>
                        <Nav.Link href="#deets">Signup</Nav.Link> */}
                        <li class="nav-item">
                            <NavLink class="nav-link" to='/'>Home</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink class="nav-link" to='signin'>Signin</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink class="nav-link" to='signup'>Signup</NavLink>
                        </li>
                    </Nav>
                </Navbar.Collapse>
            </Container>

        </Navbar>
    )
}

export default Header