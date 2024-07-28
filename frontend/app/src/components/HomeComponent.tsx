'use client'

import { Container, Row, Col, Button } from 'react-bootstrap';
import { useRouter } from "next/navigation";

export default function HomeComponent() {
    const router = useRouter();

    const goToBookings = () => {
        router.push('/bookings')
    }
    return (
        <Container className="mt-5 d-flex flex-column align-items-center">
            <Row className="justify-content-center">
                <Col xs="auto">
                    <h1 className="text-center">DEV-TASKLIST-MAIN</h1>
                </Col>
            </Row>
            <Row className="justify-content-center mt-3">
                <Col xs="auto">
                    <Button variant="primary" onClick={goToBookings}>Go to Bookings</Button>
                </Col>
            </Row>
        </Container>
    );
}
