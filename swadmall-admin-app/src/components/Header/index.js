import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { signout } from '../../actions/auth.actions';



const Header = (props) => {

    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const logout = () =>{

        dispatch(signout());
    }

    const renderLoggedInLinks = () => {
        return (<Nav>
            <li className="nav-item">
                <span className="nav-link" onClick={logout}>Signout</span>
            </li>
        </Nav>);


    }
    const renderNonLoggedInLinks = () => {
        return (<Nav>
            {/* <Nav.Link href="#deets">Home</Nav.Link>
            <Nav.Link href="#deets">Signin</Nav.Link>
            <Nav.Link href="#deets">Signup</Nav.Link> */}
            <li className="nav-item">
                <NavLink className="nav-link" to='/'>Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to='signin'>Signin</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to='signup'>Signup</NavLink>
            </li>
        </Nav>);

    }

    return (
        <Navbar collapseOnSelect fixed="top" expand="lg" bg="dark" variant="dark" style={{ zIndex: 1 }}>
            <Container fluid>
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
                    {auth.authenticate ? renderLoggedInLinks() : renderNonLoggedInLinks()}

                </Navbar.Collapse>
            </Container>

        </Navbar>
    )
}

export default Header