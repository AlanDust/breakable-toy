import React from 'react';
import { Link } from 'react-router';

const InstrumentTile = props => {

  return(
    <div className="large-12 medium-12 small-12 column users">
      <div className="large-2 medium-2 small-12 column">
        <h3>{props.picture}</h3>
      </div>
      <div className="large-6 medium-6 small-12 column">
        <h1>{props.firstName} {props.lastName}</h1>
        <h2>{props.email}</h2>
        <h3>{props.lessonLocation}</h3>
      </div>
      <div className="large-4 medium-4 small-12 column bio">
        <p>{props.bio}</p>
      </div>
    </div>
  )
}

export default InstrumentTile
