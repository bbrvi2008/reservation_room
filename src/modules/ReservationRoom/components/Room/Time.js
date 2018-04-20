import React, { Component } from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';

class Time extends Component {
  handleTimeClick = () => {
    const { date, reservationTime } = this.props;
    reservationTime(date);
  }

  getReservedTime = () => {
    const { date } = this.props;
    
    return (
      <div className="rr-room_time rr-room_reserved-time">
          {moment(date).format("HH:mm")}
      </div>
    );
  }

  getFreeTime = () => {
    const { date } = this.props;
    
    return (
      <div className="rr-room_time rr-room_free-time" onClick={this.handleTimeClick}>
          {moment(date).format("HH:mm")}
      </div>
    );
  }

  render() {
    const { date } = this.props;
    const { reservations } = this.props;

    const reserved = reservations.some(reservation => reservation.date.getTime() === date.getTime());
    return (
      reserved ? this.getReservedTime() : this.getFreeTime()
    );
  }
}

Time.propTypes = {
  date: PropTypes.object.isRequired
}

export default Time;