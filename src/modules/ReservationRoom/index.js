import React, { Component } from 'react';
import { connect } from 'react-redux';

import Paginator from './components/Paginator/index';
import Room from './components/Room/index';

import { getDates } from './reducers/dates';


import './style.css';

class ReservationRoom extends Component {

  render() {
    const { dates } = this.props;

    return (
      <div>
        <Paginator
          dates={dates}
        />
        <Room
          name="Зеленая"
          description="(до 5 персон)"
          dates={dates}
        />
        <Room
          name="Красная"
          description="(до 15 персон)"
          dates={dates}
        />
        <Room
          name="Синяя"
          description="(до 25 персон)"
          dates={dates}
        />
        <Room
          name="Фиолетовая"
          description="(до 25 персон)"
          dates={dates}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dates: getDates(state)
  };
}

export default connect(
  mapStateToProps,
)(ReservationRoom);