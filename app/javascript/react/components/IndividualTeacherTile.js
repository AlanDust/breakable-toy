import React from 'react';
import { Link } from 'react-router';
import PictureTile from './PictureTile'

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
          <PictureTile
            profile_photo = {props.profile_photo}
          />
        </div>
        <h3 className="teacher-show-bio">{props.long_bio}</h3>
      </div>
      <iframe className="google-calendar" src={props.calendar}></iframe>
    </div>
  )
}

export default IndividualTeacherTile
