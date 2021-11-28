import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";




function Navigation() {

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">Craft Beer Website</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/test-1">test 1</Nav.Link>
                        <Nav.Link href="/test-2">test 2</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;