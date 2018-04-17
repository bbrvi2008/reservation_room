import React, { Component } from 'react';

import Paginator from './components/Paginator/index';
import Room from './components/Room/index';


import './style.css';

class ReservationRoom extends Component {
  render() {
    return (
      <div>
        <Paginator />
        <Room
          name="Зеленая"
          description="(до 5 персон)"
        />
        <Room
          name="Красная"
          description="(до 15 персон)"
        />
        <Room
          name="Синяя"
          description="(до 25 персон)"
        />
        <Room
          name="Фиолетовая"
          description="(до 25 персон)"
        />
      </div>
    );
  }
}

export default ReservationRoom;