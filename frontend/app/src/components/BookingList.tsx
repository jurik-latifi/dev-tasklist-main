import { useRouter } from 'next/router';
import { Button, Container, Row, Col } from 'react-bootstrap';
import BookingListGroup from './BookingListGroup';

const BookingList = ({ bookings }) => {
  const router = useRouter();

  const CreateBook = () => {
    router.push('/newbooking');
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1>Booking List</h1>
          <BookingListGroup bookings={bookings} />
          <Button variant="primary" onClick={CreateBook} className="mt-3">
            Book Here
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default BookingList;
