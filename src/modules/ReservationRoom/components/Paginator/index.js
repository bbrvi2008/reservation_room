import React, { Component } from 'react';

import moment from 'moment';

class Paginator extends Component {
  render() {
    const { dates } = this.props;

    return (
      <div className="rr-container">
        <div className="rr-left">
          Комната
        </div>
        <div className="rr-content rr-paginator">
          <div className="rr-paginator_month">
            <div className="rr-paginator_month_left">
              {`<<<`}
            </div>
            <div className="rr-paginator_month_title">
              {moment(dates[0]).format("MMMM")}
            </div>
            <div className="rr-paginator_month_right">
              {`>>>`}
            </div>
          </div>
          <div className="rr-paginator_days">
            {
              dates.map((date, i) => (
                <div className="rr-paginator_day" key={i}>{moment(date).format("DD dddd")}</div>
              ))
            }            
          </div>
        </div>    
      </div>
    );
  }
}

export default Paginator;