import React, { Component } from 'react';
import * as UtilityActions from '../actions/UtilityActions.jsx';

class StopButton extends Component {

  stopRequest() {
    UtilityActions.stopRequest();
  }

  render() {
    return(
      <button
        className='stop-button'
        onClick={this.stopRequest.bind(this)}
        >Stop</button>
    )
  }
}

export default StopButton
