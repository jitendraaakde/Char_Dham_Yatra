import { Component } from "react";
import { Alert, Button, Col, Container, Dropdown, Form, Row } from "react-bootstrap";
import { saveTravel } from "../Services/TravelServices.js";

export class TravelTrade extends Component {
    constructor() {
        super();
        this.state = {
            formData: {},
            isInserted: false
        }
    }
    handleChange = (e) => {
        this.setState({ formData: { ...this.state.formData, [e.target.name]: e.target.value } });
    }
    handleSubmit = async (e) => {
        console.log(e);
        e.preventDefault();
        const response = await saveTravel(this.state.formData);
        console.log(response.data);
        setTimeout(() => {
            this.setState({ isInserted: true });
        }, 0);
        setTimeout(() => {
            this.setState({ isInserted: false });
        }, 2000);
    }
    render() {
        return (
            <>
                <Container className="mt-5 text-center w-75">
                    <Alert variant="primary"> Register a new Travel Data</Alert>
                </Container>
                {
                    this.state.isInserted ? <Container className="mt-3 text-center w-75">
                        <Alert variant="success">Add New Data !</Alert>
                    </Container> : null
                }
                <Container>
                    <Form onSubmit={this.handleSubmit}>
                        <Row>
                            <Col lg={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Name" name="name" onChange={this.handleChange} />
                                </Form.Group>
                            </Col>
                            <Col lg={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter Email" name="email" onChange={this.handleChange} />
                                </Form.Group>
                            </Col>
                            <Col lg={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Phone" name="phone" onChange={this.handleChange} />
                                </Form.Group>
                            </Col>
                            <Col lg={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Website</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Website" name="website" onChange={this.handleChange} />
                                </Form.Group>
                            </Col>
                            <Col lg={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Street</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Street" name="street" onChange={this.handleChange} />
                                </Form.Group>
                            </Col>
                            <Col lg={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control type="text" placeholder="Enter City" name="city" onChange={this.handleChange} />
                                </Form.Group>
                            </Col>
                            <Col lg={6}>
                                <Dropdown onSelect={(k, e) => {
                                    // (e.target.innerHTML);
                                }}>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                        Select Task
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        {/* All, Pending and Completed ye naam hai woh sab ek tarah se url ka kaam kar rahe hai */}
                                        <Dropdown.Item>all</Dropdown.Item>
                                        <Dropdown.Item>Dharamshala</Dropdown.Item>
                                        <Dropdown.Item>bhopal</Dropdown.Item>
                                        <Dropdown.Item>kanadia</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>
                        </Row>
                        <div className="text-center">
                            <Button type="submit" className="btn btn-primary w-75">Register</Button>
                        </div>
                    </Form>
                </Container>
            </>
        );
    }
}