import React from 'react';
import FormatDate from './FormatDate';

const BookingInfo = ({ date, startTime }) => {
  return (
    <div>
      A Booking on <FormatDate dateString={date} /> starting at {startTime}
    </div>
  );
};

export default BookingInfo;
