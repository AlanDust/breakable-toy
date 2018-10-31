import React from 'react';
import { Link } from 'react-router';

const InstrumentTile = props => {

  return(
    <div className="large-12 medium-12 small-12 column">
      <h1>{props.firstName} {props.lastName}</h1>
      <h2>{props.email}</h2>
      <h3>{props.lessonLocation}</h3>
      <h3>{props.picture}</h3>
      <p>{props.bio}</p>
    </div>
  )
}

export default InstrumentTile
