import React, { Component } from 'react';
import { Link } from 'react-router';
import IndividualTeacherTile from '../components/IndividualTeacherTile'

class IndividualTeacherContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teacherData: []
    }
  }

  componentDidMount() {
    fetch(`/api/v1/instruments/${this.props.params.instrument_id}/users/${this.props.params.id}`)
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then((response) => response.json())
    .then((data) => {
      this.setState({
        teacherData: data
      })
    })
  }
  render() {
    return(
      <div>
        <IndividualTeacherTile
          key = {this.state.teacherData.id}
          id = {this.state.teacherData.id}
          age = {this.state.teacherData.age}
          long_bio = {this.state.teacherData.long_bio}
          email = {this.state.teacherData.email}
          first_name = {this.state.teacherData.first_name}
          last_name = {this.state.teacherData.last_name}
          lesson_location = {this.state.teacherData.lesson_location}
          profile_photo = {this.state.teacherData.profile_photo}
          zip = {this.state.teacherData.zip}
          calendar = {this.state.teacherData.calendar}
        />
      </div>
    )
  }
}

export default IndividualTeacherContainer
