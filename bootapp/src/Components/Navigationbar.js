import { Component } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export class Navigationbar extends Component {
    render() {
        return (
            <>
                <Navbar sticky="top" bg="primary" variant="dark" expand="lg" className="py-3">
                    <Container>
                        <Navbar.Brand>Char Dham Yatra</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <LinkContainer to='/'>
                                    <Nav.Link>Home</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to='agent-list'>
                                    <Nav.Link>Agent List</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to='/dharamshala'>
                                    <Nav.Link>Dharamshala</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to='/hotel'>
                                    <Nav.Link>Hotel</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to='/homestay'>
                                    <Nav.Link>HomeStay</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to='/best-timing'>
                                    <Nav.Link>BestTiming</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to='/temple-timing'>
                                    <Nav.Link>Temple Timing</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to='/temples'>
                                    <Nav.Link>Char Dham Temples</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to='/hospital'>
                                    <Nav.Link>Hospitals</Nav.Link>
                                </LinkContainer>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        );
    }
}