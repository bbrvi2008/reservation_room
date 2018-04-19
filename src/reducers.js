import { combineReducers } from 'redux';

import dates from './modules/ReservationRoom/reducers/dates';
import reservations from './modules/ReservationRoom/reducers/reservations';


export default combineReducers({
  dates,
  reservations
})