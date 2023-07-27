import { useEffect, useState } from "react";
import { Container, Image, Table } from "react-bootstrap";
import { fetchAllHomeStay } from "../Services/api.js";


export function HomeStay() {
    const [home, setHome] = useState([]);
    const fetchHome = async () => {
        const response = await fetchAllHomeStay();
        setHome(response.data);
        console.log(response.data);
    }
    useEffect(() => {
        fetchHome();
    }, []);

    return (
        <>
            <div>
                <Image src="https://seoimgak.mmtcdn.com/blog/sites/default/files/images/resorts-in-uttarakhand-riverview-retreat.jpg" alt="OM" style={{ width: '100%', height: '300px' }}></Image>
            </div>
            <Container className="my-5 text-center">
            <h1 style={{ borderRadius: "20px", background: '#0D6EFD', color: 'white', boxShadow: '5px 5px lightblue' , padding: '10px' }}>HOMESTAY LISTING</h1>
            </Container>
            <div className="mx-2">
                <Table bordered className="text-center" style={{ overflow: 'auto'}}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Address</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            home.map((e) => {
                                return (
                                    <tr className="text-center">
                                        <td>{e.name}</td>
                                        <td>+91-{e.phone}</td>
                                        <td>{e.address}</td>
                                        <td>{e.email}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </div>
        </>
    );
}