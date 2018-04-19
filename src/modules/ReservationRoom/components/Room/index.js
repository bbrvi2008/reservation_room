import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Days from './Days';

class Room extends Component {
  handleReservationTime = (date) => {
    const { id, reservationTime } = this.props;
    reservationTime({
      room: id,
      date
    })
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
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  dates: PropTypes.array.isRequired,

  reservations: PropTypes.array.isRequired,
  reservationTime: PropTypes.func.isRequired
}

export default Room;