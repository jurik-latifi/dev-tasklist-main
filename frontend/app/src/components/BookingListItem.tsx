import { Button, ListGroup } from 'react-bootstrap';
import { useRouter } from 'next/router';
import BookingInfo from './BookingInfo';


const BookingListItem = ({ booking }) => {
  const router = useRouter();

  const viewBookingDetails = (id) => {
    router.push(`/bookings/${id}`);
  };

  return (
    <ListGroup.Item
      key={booking.id}
      className="d-flex justify-content-between align-items-center"
      style={{ backgroundColor: '#f8f9fa', borderColor: '#dee2e6' }}
    >
      <BookingInfo date={booking.date} startTime={booking.start_time} />
      <Button variant="info" onClick={() => viewBookingDetails(booking.id)}>
        View Details
      </Button>
    </ListGroup.Item>
  );
};

export default BookingListItem;
