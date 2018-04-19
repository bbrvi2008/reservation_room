import { RESERVATION_TIME } from '../actions/reservations';

import { rooms } from '../constants';

export default (state = [], action) => {
  switch (action.type) {
    case RESERVATION_TIME:
      return [
        ...state,
        action.reservation
      ];
    default:
      return state;
  }
};

export const getReservations = (state) => {
  const { reservations } = state;

  let reservationsDictionary = {};
  rooms.forEach(room => {
    reservationsDictionary[room] = reservations.filter(reservation => reservation.room === room);
  })

  return reservationsDictionary;
}