import React from 'react'
import {  Container } from "react-bootstrap";
import './Home.css';
import HomeCard from './HomeCard';
import Carousels from './Carousels';

export default function Home() {
    return (
        <>
        <Carousels />
            <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>                
                <Container className="mt-5 text-center">
                    <HomeCard />
                </Container>
            </div>
        </>
    )
}
