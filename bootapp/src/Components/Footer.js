import React from 'react'
import { Col, Container, Image, Nav, Row } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

export default function Footer() {
    return (
        <>
            <div className='pt-5 pb-5 text-center mt-5 mb-2 mx-2' style={{ backgroundColor: '#0d6efd', borderRadius: '10px' }}>
                <Container>
                    <Row>
                        <Col lg={4} className='mt-3'>
                            <div>
                            <Image src="https://i2.wp.com/www.wordzz.com/wp-content/uploads/2017/04/Om-Free-PNG-Image.png?fit=999%2C1030" alt="OM" fluid rounded style={ {height: '100px'} }></Image>
                            </div>
                        </Col>
                        <Col lg={4} className='mt-3'>
                        <Nav className="me-auto" style={{ display:"flex", flexDirection:"column" }}>
                                <LinkContainer to='/' style={{ color:"white" }}>
                                    <Nav.Link>Home</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to='/createagent' style={{ color:"white" }}>
                                    <Nav.Link>Register Agent</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to='/agent-list' style={{ color:"white" }}>
                                    <Nav.Link>Agent List</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to='/dharamshala' style={{ color:"white" }}>
                                    <Nav.Link>Dharamshala</Nav.Link>
                                </LinkContainer>
                            </Nav>
                        </Col>
                        <Col lg={4} className='mt-3'>
                        <Nav className="me-auto" style={{ display:"flex", flexDirection:"column" }}>
                                <LinkContainer to='/hotel' style={{ color:"white" }}>
                                    <Nav.Link>Hotel</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to='/homestay' style={{ color:"white" }}>
                                    <Nav.Link>HomeStay</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to='agent-list' style={{ color:"white" }}>
                                    <Nav.Link>Agent List</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to='create-dharamshala' style={{ color:"white" }}>
                                    <Nav.Link>Register Dharamshala</Nav.Link>
                                </LinkContainer>
                            </Nav>
                        </Col>
                        
                    </Row>
                </Container>
            </div>
        </>
    )
}
