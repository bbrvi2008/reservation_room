export const RESERVATION_TIME = 'RESERVATION_TIME';

export default {
  reservationTime: (reservation) => ({
    type: RESERVATION_TIME,
    reservation
  })
};