import React, { Component } from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';

class Time extends Component {
  handleTimeClick = () => {
    const { date } = this.props;    
    console.log(date);
  }

  render() {
    const { date } = this.props;

    return (
      <div className="rr-room_time" onClick={this.handleTimeClick}>
          {moment(date).format("HH:mm")}
      </div>
    );
  }
}

Time.propTypes = {
  date: PropTypes.object.isRequired
}

export default Time;