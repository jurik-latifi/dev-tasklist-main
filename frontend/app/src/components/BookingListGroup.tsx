import { ListGroup } from 'react-bootstrap';
import BookingListItem from './BookingListItem';


const BookingListGroup = ({ bookings }) => {
  return (
    <ListGroup>
      {bookings.map((booking) => (
        <BookingListItem key={booking.id} booking={booking} />
      ))}
    </ListGroup>
  );
};

export default BookingListGroup;
