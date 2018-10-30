import React from 'react';
import { Link } from 'react-router';

const InstrumentTile = props => {

  return(
    <div className="large-3 medium-6 small-12 column">
      <div>
        <h3>{props.name}</h3>
      </div>
    </div>
  )
}

export default InstrumentTile
