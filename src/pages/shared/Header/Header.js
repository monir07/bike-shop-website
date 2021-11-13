import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    const siteLogo = 'https://i.ibb.co/qFYvc8w/logo-bike.png';
    return (
        <>
            <Navbar className="nav-bg" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/home" className="fw-bold">
                        <img style={{ width: "35%" }} src={siteLogo} className="image-fluid" alt='logo' />{''}
                        <span className="m-3">Bike Point</span>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end nav-link">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/services">Products</Nav.Link>
                        <Nav.Link as={Link} to="/contact-us">Contact Us</Nav.Link>
                        <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                        {user.email ?
                            <Nav.Link as={Link} to="/my-orders">My Orders</Nav.Link> :
                            null
                        }
                        {user.email ?
                            <Nav.Link as={Link} to="/all-orders">All Orders</Nav.Link> :
                            null
                        }
                        {user.email ?
                            <Nav.Link as={Link} to="/add-package">Add Package</Nav.Link> :
                            null
                        }
                        {user.email ?
                            <button onClick={logOut} className="btn btn-danger">Log Out</button> :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        }
                        {user.email ?
                            <Navbar.Text className="m-3 text-warning">
                                User: {user?.displayName}
                            </Navbar.Text> :
                            null
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;