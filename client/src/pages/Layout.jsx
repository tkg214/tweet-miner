import React, { Component } from 'react';
import { Link } from 'react-router';

class Layout extends Component {

  render() {
    const { location } = this.props;

    return {
      <div>
        {this.props.childrem}
      </div>
    }
  }

};

export default Layout;
