import { useEffect, useState } from "react";
import { Container, Image, Table } from "react-bootstrap";
import { fetchAllDharam } from "../Services/api.js";


export function Dharamshala() {
    const [dharam, setDharam] = useState([]);
    const fetchDharam = async () => {
        const response = await fetchAllDharam();
        setDharam(response.data);
        console.log(response.data);
    }
    useEffect(() => {
        fetchDharam();
    }, []);

    return (
        <>
            <div>
                <Image src="https://img.traveltriangle.com/blog/wp-content/uploads/2019/11/Homestays-In-Dharamshala-cover_19th-Nov.jpg" alt="OM" style={{ width: '100%', height: '300px' }}></Image>
            </div>
            <Container className="my-5 text-center">
                <h1 style={{ borderRadius: "20px", background: '#0D6EFD', color: 'white', boxShadow: '5px 5px lightblue', padding: '10px' }}>List of Dharamshala $ Aasharam</h1>
            </Container>
            <Container>
                <Table bordered className="text-center" hover>
                    <thead style={{ background: '#0D6EFD', color: 'white' }}>
                        <tr>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Address</th>
                            <th>Email</th>
                            <th>Website</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            dharam.map((e) => {
                                return (
                                    <tr className="text-center">
                                        <td>{e.name}</td>
                                        <td>+91-{e.phone}</td>
                                        <td>{e.address}</td>
                                        <td>{e.email}</td>
                                        <td>{e.website}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </Container>
        </>
    );
}


// import { Component } from "react";
// import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
// import { saveTravel } from "../Services/TravelServices.js";

// export class Dharamshala extends Component {
//     constructor() {
//         super();
//         this.state = {
//             formData: {},
//             isInserted: false
//         }
//     }
//     handleChange = (e) => {
//         this.setState({ formData: { ...this.state.formData, [e.target.name]: e.target.value } });
//     }
//     handleSubmit = async (e) => {
//         console.log(e);
//         e.preventDefault();
//         const response = await saveTravel(this.state.formData);
//         console.log(response.data);
//         setTimeout(() => {
//             this.setState({ isInserted: true });
//         }, 0);
//         setTimeout(() => {
//             this.setState({ isInserted: false });
//         }, 2000);
//     }
//     render() {
//         return (
//             <>
//                 <Container className="mt-5 text-center w-75">
//                     <Alert variant="primary"> Register a new Travel Data</Alert>
//                 </Container>
//                 {
//                     this.state.isInserted ? <Container className="mt-3 text-center w-75">
//                         <Alert variant="success">Add New Data !</Alert>
//                     </Container> : null
//                 }
//                 <Container>
//                     <Form onSubmit={this.handleSubmit}>
//                         <Row>
//                             <Col lg={6}>
//                                 <Form.Group className="mb-3">
//                                     <Form.Label>Name</Form.Label>
//                                     <Form.Control type="text" placeholder="Enter Name" name="name" onChange={this.handleChange} />
//                                 </Form.Group>
//                             </Col>
//                             <Col lg={6}>
//                                 <Form.Group className="mb-3">
//                                     <Form.Label>Email</Form.Label>
//                                     <Form.Control type="email" placeholder="Enter Email" name="email" onChange={this.handleChange} />
//                                 </Form.Group>
//                             </Col>
//                             <Col lg={6}>
//                                 <Form.Group className="mb-3">
//                                     <Form.Label>Phone</Form.Label>
//                                     <Form.Control type="text" placeholder="Enter Phone" name="phone" onChange={this.handleChange} />
//                                 </Form.Group>
//                             </Col>
//                             <Col lg={6}>
//                                 <Form.Group className="mb-3">
//                                     <Form.Label>Website</Form.Label>
//                                     <Form.Control type="text" placeholder="Enter Website" name="website" onChange={this.handleChange} />
//                                 </Form.Group>
//                             </Col>
//                             <Col lg={6}>
//                                 <Form.Group className="mb-3">
//                                     <Form.Label>Street</Form.Label>
//                                     <Form.Control type="text" placeholder="Enter Street" name="street" onChange={this.handleChange} />
//                                 </Form.Group>
//                             </Col>
//                             <Col lg={6}>
//                                 <Form.Group className="mb-3">
//                                     <Form.Label>City</Form.Label>
//                                     <Form.Control type="text" placeholder="Enter City" name="city" onChange={this.handleChange} />
//                                 </Form.Group>
//                             </Col>
//                         </Row>
//                         <div className="text-center">
//                             <Button type="submit" className="btn btn-primary w-75">Register</Button>
//                         </div>
//                     </Form>
//                 </Container>
//             </>
//         );
//     }
// }