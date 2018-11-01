import React, { Component } from 'react';
import TeacherTile from '../components/TeacherTile'

class TeachersContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
        userList: [],
        current_user: {}
      }
  }

  componentDidMount() {
    fetch(`/api/v1/instruments/${this.props.params.id}`)
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
      this.setState({ userList: data.users, current_user: data.current_user })
    })
  }

  render() {
    let users = this.state.userList.map(user => {
      return(
        <TeacherTile
          key={user.id}
          id={user.id}
          firstName={user.first_name}
          lastName={user.last_name}
          email={user.email}
          picture={user.profile_photo}
          bio={user.bio}
          lessonLocation={user.lesson_location}
          zip={user.zip}
          instrument_id={this.props.params.id}
        />
      )
    })
    return(
      <div>
        {users}
      </div>
    )
  }
}

export default TeachersContainer;
