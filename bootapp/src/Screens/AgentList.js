import { useEffect, useState } from "react";
import { Container, Dropdown, Image, Table } from "react-bootstrap";
import { fetchAllAgents } from "../Services/api.js";

export function AgentList() {
    const [agent, setAgent] = useState([]);
    const fetchAgents = async (url) => {
        const response = await fetchAllAgents(url);
        setAgent(response.data);
        console.log(response.data);
    }
    useEffect(() => {
        fetchAgents("all");
    }, []);

    return (
        <>
            <div>
                <Image src="https://himalayavedicworld.com/images/blog/1/char-dham-banner.jpg" alt="OM" style={{ width: '100%', height: '300px' }}></Image>
            </div>
            <Container className="my-5 text-center">
                <h1 style={{ borderRadius: "20px", background: '#0D6EFD', color: 'white', boxShadow: '5px 5px lightblue' , padding: '10px' }}>List of Agents</h1>
            </Container>
            <Container className="mt-4 mb-4">
                <Dropdown onSelect={(k, e) => {
                    fetchAgents(e.target.innerHTML);
                }}>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Select Task
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        {/* All, Pending and Completed ye naam hai woh sab ek tarah se url ka kaam kar rahe hai */}
                        <Dropdown.Item>all</Dropdown.Item>
                        <Dropdown.Item>Dehradun</Dropdown.Item>
                        <Dropdown.Item>Haldwani</Dropdown.Item>
                        <Dropdown.Item>Haridwar</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Container>
            <Container>
                <Table bordered className="text-center">
                    <thead>
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
                            agent.map((agt) => {
                                return (
                                    <tr className="text-center">
                                        <td>{agt.name}</td>
                                        <td>+91-{agt.phone}</td>
                                        <td>{agt.street}, {agt.city}, {agt.state}</td>
                                        <td>{agt.email}</td>
                                        <td>{agt.website}</td>
                                        {/* <td><Button variant="danger" className="btn-sm" onClick={async () => {
                                            await deleteAgent(agt._id);
                                            fetchAgents("all");
                                        }}>Remove</Button>
                                            <Button variant="primary" className="btn-sm mx-5">Edit List</Button>
                                        </td> */}
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