import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Time from './Time';

class Day extends Component {
  makeDateTimeCounter = (date, step) => {
    let counter = new Date(date);
    counter.setHours(9);

    return () => {
      let nextDateTime = new Date(counter);
      counter.setHours(counter.getHours() + step);
      return nextDateTime;
    }
  }

  getDateTimes = (timeCounter) => {
    return Array.apply(0, new Array(10)).map(() => timeCounter());
  }
  
  render() {
    const { date } = this.props;
    const { reservations, reservationTime } = this.props;
    
    let timeCounter = this.makeDateTimeCounter(date, 1);
    let dateTimes = this.getDateTimes(timeCounter);

    return (
      <div className="rr-room_day">
        {
          dateTimes.map((dateTime, i) => (
            <Time 
              date={dateTime}
              reservations={reservations}
              reservationTime={reservationTime}
              key={i} 
            />
          ))
        }
      </div>
    );
  }
}

Day.propTypes = {
  date: PropTypes.object.isRequired
}

export default Day;