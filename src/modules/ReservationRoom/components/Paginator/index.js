import React, { Component } from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';

import LeftArrow from './icons/left-arrow.svg';
import RightArrow from './icons/right-arrow.svg';


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
            <img src={LeftArrow} alt="left" className="rr-paginator_button" onClick={pagePrev}/>
            <div className="rr-paginator_title">{moment(dates[0]).format("MMMM")}</div>
            <img src={RightArrow} alt="right" className="rr-paginator_button" onClick={pageNext}/>
          </div>
          <div className="rr-paginator_days">
            {
              dates.map((date, i) => (
                <span className="rr-paginator_day" key={i}>{moment(date).format("DD dddd")}</span>
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