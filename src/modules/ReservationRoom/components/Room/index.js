import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Days from './Days';

import moment from 'moment';

import './style.css';

class Room extends Component {
  handleReservationTime = (date) => {
    const { room, name, reservationTime } = this.props;
    if(window.confirm(`Забронировать переговорную комнату: "${name}" на "${moment(date).format("DD.MM.YYYY HH:mm")}"?`)) {
      reservationTime({
        room,
        date
      });
    }
  }

  render() {
    const { name, description, dates } = this.props;
    const { reservations } = this.props;

    return (
      <div className="rr-room rr-container">
        <div className="rr-left">
          <div className="rr-room_name">{name}</div>
          <div className="rr-room_description">{description}</div>
        </div>
        <div className="rr-content">
          <Days 
            dates={dates}
            reservations={reservations}
            reservationTime={this.handleReservationTime}
          />
        </div>
      </div>
    );
  }
}

Room.propTypes = {
  room: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  dates: PropTypes.array.isRequired,

  reservations: PropTypes.array.isRequired,
  reservationTime: PropTypes.func.isRequired
}

export default Room;