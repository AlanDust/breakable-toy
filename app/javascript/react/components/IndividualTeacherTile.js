import React from 'react';
import { Link } from 'react-router';

const IndividualTeacherTile = props => {

  return(
    <div>
      <div>
        <div className="large-6 medium-6 small-12 column">
          <h1 className="teacher-show-name">{props.first_name} {props.last_name}</h1>
          <h2 className="teacher-show-name">{props.email}</h2>
          <h2 className="teacher-show-name">{props.lesson_location} {props.zip}</h2>
        </div>
        <div className="large-6 medium-6 small-12 column">
          <img className="show-page-image" src={props.profile_photo} />
        </div>
        <h3 className="teacher-show-bio">{props.long_bio}</h3>
      </div>
    </div>
  )
}

export default IndividualTeacherTile
