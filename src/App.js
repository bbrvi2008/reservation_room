import React, { Component } from 'react';
import { Provider } from 'react-redux';


import ReservationRoom from './modules/ReservationRoom/index';

class App extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <div className="App">
          <ReservationRoom />
        </div>
      </Provider>
    );
  }
}

export default App;
