import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Time from './Time';

class Day extends Component {
  dateTimeCounterDecorator = (date, step) => {
    date.setHours(8);
    return () => {
      date.setHours(date.getHours() + step);
      return new Date(date);
    }
  }

  getDateTimes = (timeCounter) => {
    return Array(10).fill().map(() => (timeCounter()));
  }
  
  render() {
    const { date } = this.props;
    let timeCounter = this.dateTimeCounterDecorator(date, 1);
    let dateTimes = this.getDateTimes(timeCounter);

    return (
      <div className="rr-room_day">
        {
          dateTimes.map((dateTime, i) => (
            <Time date={dateTime} key={i} />
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