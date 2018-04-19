import React, { Component } from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';

import './style.css'

class Paginator extends Component {
  render() {
    const { dates, pageNext, pagePrev } = this.props;

    return (
      <div className="rr-container">
        <div className="rr-left">
          Комната
        </div>
        <div className="rr-content rr-paginator">
          <div className="rr-paginator_buttons">
            <div className="rr-paginator_button rr-paginator_left" onClick={pagePrev}>
              {`<<<`}
            </div>
            <div className="rr-paginator_title">
              {moment(dates[0]).format("MMMM")}
            </div>
            <div className="rr-paginator_button rr-paginator_right" onClick={pageNext}>
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

Paginator.propTypes = {
  dates: PropTypes.array.isRequired,
  pageNext: PropTypes.func.isRequired,
  pagePrev: PropTypes.func.isRequired
};

export default Paginator;