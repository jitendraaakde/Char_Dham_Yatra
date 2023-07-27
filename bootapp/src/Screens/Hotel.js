import { useEffect, useState } from "react";
import { Container, Image, Table } from "react-bootstrap";
import { fetchAllHotel } from "../Services/api";


export function Hotel() {
    const [hotel, setHotel] = useState([]);
    const fetchHotel = async () => {
        const response = await fetchAllHotel();
        setHotel(response.data);
        console.log(response.data);
    }
    useEffect(() => {
        fetchHotel();
    }, []);

    return (
        <>
            <div>
                <Image src="https://seoimgak.mmtcdn.com/blog/sites/default/files/images/resorts-in-uttarakhand-riverview-retreat.jpg" alt="OM" style={{ width: '100%', height: '300px' }}></Image>
            </div>
            <Container className="my-5 text-center">
            <h1 style={{ borderRadius: "20px", background: '#0D6EFD', color: 'white', boxShadow: '5px 5px lightblue' , padding: '10px' }}>Hotel,Motel/Road Side Facilities/Resort/Guest House/Tourist Rest House</h1>
            </Container>
            <div className="mx-2">
                <Table bordered style={{ overflow: 'auto'}} className="text-center">
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
                            hotel.map((e) => {
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
            </div>
        </>
    );
}