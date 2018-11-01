import React from 'react';
import { Link } from 'react-router';

const IndividualTeacherTile = props => {

  return(
    <div>
      <div>
        <div className="large-6 medium-6 small-12 column">
          <h1>{props.first_name} {props.last_name}</h1>
          <h2>{props.email}</h2>
          <h2>{props.lesson_location} {props.zip}</h2>
        </div>
        <div className="large-6 medium-6 small-12 column">
          <h1>Profile Photo will go here!</h1>
          <h1>Profile Photo will go here!</h1>
          <h1>Profile Photo will go here!</h1>
          <h1>{props.profile_photo}</h1>
        </div>

        <h3>{props.bio}</h3>
      </div>
    </div>
  )
}

export default IndividualTeacherTile
