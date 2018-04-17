import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Days from './Days';

class Room extends Component {
  render() {
    const { name, description } = this.props;

    return (
      <div className="rr-room rr-container">
        <div className="rr-left">
          <div className="rr-room_name">{name}</div>
          <div className="rr-room_description">{description}</div>
        </div>
        <div className="rr-content">
          <Days />
        </div>
      </div>
    );
  }
}

Room.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string
}

export default Room;