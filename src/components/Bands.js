import React, { Component } from 'react';
import Band from './Band'

class Bands extends Component {
  render() {
    const mappedBands = this.props.store.getState().bands.map(band => {
      return <Band store={this.props.store} band={band} />
    })
    return(
      <ul>
        {mappedBands}
      </ul>
    );
  }
};

export default Bands;
