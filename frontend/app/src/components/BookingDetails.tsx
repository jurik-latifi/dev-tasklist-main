import { useRouter } from 'next/router';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import FormatDate from './FormatDate';

const BookingDetails = ({ booking }) => {
  const router = useRouter();

  const handleBackClick = () => {
    router.push('/bookings');
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card>
            <Card.Header as="h1">Booking Details</Card.Header>
            <Card.Body>
              <Card.Text>
                <strong>Service:</strong> {booking.service}
              </Card.Text>
              <Card.Text>
                <strong>Doctor:</strong> {booking.doctor_name}
              </Card.Text>
              <Card.Text>
                <strong>Date:</strong> <FormatDate dateString={booking.date} /> from {booking.start_time} to {booking.end_time}
              </Card.Text>
              <Button variant="primary" onClick={handleBackClick}>
                Back to Bookings
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default BookingDetails;
