import React from 'react';
import { Container } from 'react-bootstrap';
import '../assets/CSS/BestTiming.css';
import TableBestTime from '../image/timing_dham/Table-of-Best-time.webp';

export default function MonthWise() {
    return (
        <>
        <div className='monthWise'>
            <Container>
                <div>
                    <img src={TableBestTime} alt="" className='table-image' />
                </div>
            </Container>
            

            <h2 className='heading'>Benefits to Visit Chardham Yatra at Right Time:-</h2>
            <ul className='mx-5'>
                <li>You will make a risk-free Journey.</li>
                <li>No unwanted delays should happen during your Chardham yatra.</li>
                <li>You will make a Comfortable Journey with almost No-unpredictabilities.</li>
                <li>You can also pay homage to the deities of Chardham yatra comfortably.</li>
            </ul>
            <p className='mini-para'>Visit the Chardham yatra at the best time, i.e April, May, and June, and make refreshing memories. So, Book Chardham yatra package from LIH the Leading Chardham travel agents in Uttrakhand.</p>

            </div>
        </>
    )
}
