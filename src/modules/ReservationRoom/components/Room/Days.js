import React, { Component } from 'react';

import Day from './Day';

class Days extends Component {
  

  render() {
    const { dates } = this.props;

    return (
      <div className="rr-room_days">
          {
            dates.map((date, i) => (
              <Day date={date} key={i} />
            ))
          }
        </div>
    );
  }
}

export default Days;