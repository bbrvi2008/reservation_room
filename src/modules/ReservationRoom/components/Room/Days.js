import React, { Component } from 'react';

class Days extends Component {



  render() {
    return (
      <div className="rr-room_days">
          {
            [0,0,0,0,0].map((e, i) => (
              <div className="rr-room_day" key={i}>
                {
                  ["09", "10", "11", "12", "13", "14", "15", "16", "17", "18"].map((hour, i) => (
                    <div className="rr-room_time" key={i}>{hour}:00</div>
                  ))
                }
              </div>
            ))
          }
        </div>
    );
  }
}

export default Days;