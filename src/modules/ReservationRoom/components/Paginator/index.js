import React, { Component } from 'react';

class Paginator extends Component {
  render() {
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
              Июль
            </div>
            <div className="rr-paginator_month_right">
              {`>>>`}
            </div>
          </div>
          <div className="rr-paginator_days">
            <div className="rr-paginator_day">10 Понедельник</div>
            <div className="rr-paginator_day">11 Вторник</div>
            <div className="rr-paginator_day">12 Среда</div>
            <div className="rr-paginator_day">13 Четверг</div>
            <div className="rr-paginator_day">14 Пятница</div>            
          </div>
        </div>    
      </div>
    );
  }
}

export default Paginator;