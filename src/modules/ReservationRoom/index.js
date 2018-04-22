import React, { Component } from 'react';
import { connect } from 'react-redux';

import Paginator from './components/Paginator/index';
import Room from './components/Room/index';

import { ROOM_YELLOW, ROOM_GREEN, ROOM_RED, ROOM_BLUE, ROOM_PURPLE } from './constants';

import datesActions from './actions/dates';
import reservationsActions from './actions/reservations';

import { getDates } from './reducers/dates';
import { getReservations } from './reducers/reservations';


import './style.css';
import 'moment/locale/ru';

class ReservationRoom extends Component {

  render() {
    const { dates } = this.props;
    const { reservations, reservationTime } = this.props;

    return (
      <div className="rr-module">
        <Paginator
          {...this.props}
        />
        <Room
          room={ROOM_YELLOW}
          name="Желтая"
          description="(до 5 персон)"
          dates={dates}

          reservationTime={reservationTime}
          reservations={reservations[ROOM_YELLOW]}
        />
        <Room
          room={ROOM_GREEN}
          name="Зеленая"
          description="(до 5 персон)"
          dates={dates}

          reservationTime={reservationTime}
          reservations={reservations[ROOM_GREEN]}
        />
        <Room
          room={ROOM_RED}
          name="Красная"
          description="(до 15 персон)"
          dates={dates}

          reservationTime={reservationTime}
          reservations={reservations[ROOM_RED]}
        />
        <Room
          room={ROOM_BLUE}
          name="Синяя"
          description="(до 25 персон)"
          dates={dates}

          reservationTime={reservationTime}
          reservations={reservations[ROOM_BLUE]}
        />
        <Room
          room={ROOM_PURPLE}
          name="Фиолетовая"
          description="(до 25 персон)"
          dates={dates}

          reservationTime={reservationTime}
          reservations={reservations[ROOM_PURPLE]}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dates: getDates(state),
    reservations: getReservations(state)
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    pageNext: () => {
      dispatch(datesActions.pageNext());
    },
    pagePrev: () => {
      dispatch(datesActions.pagePrev());
    },
    reservationTime: (reservation) => {
      dispatch(reservationsActions.reservationTime(reservation));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReservationRoom);