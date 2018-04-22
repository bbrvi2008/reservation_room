import React, { Component } from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';

//https://www.flaticon.com/free-icon/right-arrow_109617
import LeftArrow from './icons/left-arrow.svg';
import RightArrow from './icons/right-arrow.svg';

import './style.css'

class Paginator extends Component {
  getTitle = (dates) => {
    const sMonth = moment(dates[0]).format("MMMM");
    const eMonth = moment(dates[dates.length - 1]).format("MMMM");
    let month = sMonth === eMonth
      ? sMonth
      : `${sMonth}/${eMonth}`;
    
    return `${month} ${moment(dates[0]).format("YYYY")}`;
  }

  render() {
    const { dates, pageNext, pagePrev } = this.props;

    return (
      <div className="rr-container rr-paginator">
        <div className="rr-left">
          Комната
        </div>
        <div className="rr-content">
          <div className="rr-paginator_buttons">
            <img src={LeftArrow} alt="left" className="rr-paginator_button" onClick={pagePrev}/>
            <div className="rr-paginator_title">{this.getTitle(dates)}</div>
            <img src={RightArrow} alt="right" className="rr-paginator_button" onClick={pageNext}/>
          </div>
          <div className="rr-paginator_days rr-paginator_fulldays">
            {
              dates.map((date, i) => [
                <div className="rr-paginator_day" key={i}>{moment(date).format("DD dddd")}</div>              
              ])
            }
          </div>
          <div className="rr-paginator_days rr-paginator_shortdays">
            {
              dates.map((date, i) => [
                <div className="rr-paginator_day" key={i}>{moment(date).format("DD dd")}</div>               
              ])
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