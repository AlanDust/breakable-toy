import React, { Component } from 'react';
import TeacherTile from '../components/TeacherTile'

class TeachersContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
        userList: []
      }
  }

  componentDidMount() {
    // fetch(`/api/v1/users/${this.props.params.id}`)
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
      this.setState({
        userList: data.users
      })
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
