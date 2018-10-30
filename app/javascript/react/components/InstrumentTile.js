import React from 'react';
import { Link } from 'react-router';

const InstrumentTile = props => {

  return(
    <div className="large-3 medium-6 small-12 column">
      <h3 className="instrument-name">{props.name}</h3>
      <img className="instrument-image" src={props.picture} />
    </div>
  )
}

export default InstrumentTile
