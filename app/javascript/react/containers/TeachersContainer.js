import React, { Component } from 'react';
import TeacherTile from '../components/TeacherTile'

class TeachersContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [],
      current_user: {},
      errors: [],
      interests: [],
      interestId: "",
      currentInstrument: "",
      error: ""
    }
    this.addTeacher = this.addTeacher.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.postTeacher = this.postTeacher.bind(this)
    this.deleteInterest = this.deleteInterest.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  addTeacher(payload) {
    let newTeachersArray = this.state.userList.concat(payload)
    this.setState({ userList: newTeachersArray })
  }

  handleSubmit(event) {
    event.preventDefault();
      let payload = {
        interest: {instrument_id: this.props.params.id }
      };
    this.postTeacher(payload);
  }

  postTeacher(payload) {
    fetch(`/api/v1/interests.json`, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json' },
        credentials: 'same-origin'
      })
    .then(response => {
      if (response.ok) {
        return response.json()
        .then(response => {
          this.addTeacher(response.user)
        })
      } else {
        return response.json()
        .then(response => {
            return response.errors
        })
        .then(errors => {
          this.setState({ errors: errors })
        })
        .catch(console.log("ERROR in FETCH"));
      }
    })
  }

  handleClick(event) {
    let payload = {
      interest: {instrument_id: this.props.params.id, user_id: this.state.current_user.id}
    }
    let interests = this.state.interests

    interests.forEach((interest) => {
      if (interest.user_id === this.state.current_user.id) {
        this.setState({ interestId: interest.id})
      }
    })
    console.log("In handleClick")
    console.log(this.state.interestId)
    this.deleteInterest(payload);
  }

  deleteInterest(payload) {
    event.preventDefault();
    console.log("In handleClick")
    console.log(this.state.interestId)
    fetch(`/api/v1/instruments/${this.props.params.id}/interests/delete`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json' },
      credentials: 'same-origin'
    })
    .then(response => response.json())
    .then(body => {
      if(body.error) {
        throw body.error
      } else {
        let newUsers = this.state.userList.filter(user => {
          return(
            user.id !== body.interest_id
          )
        })
        this.setState({userList: newUsers})
      }
    })
    .catch(error => {
      this.setState({error: error})
      console.log(error);
      console.log("ERROR in FETCH")
    })
  }

  componentDidMount() {
    fetch(`/api/v1/instruments`)
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(response => {
      this.setState({
        current_user: response.current_user
      })
    })
    .catch(error => console.error('Error:', error));

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
      this.setState({ userList: data.users})
      return data;
    })
    .then((response) => {
      this.setState({ interests: response.interests })
      return response;
    })
    .then((response) => {
      this.setState({ currentInstrument: response.name})
    })
  }

  render() {
    let users = this.state.userList.map(user => {
      let handleDelete = () => {
        this.handleClick(user.id)
      }
      return(
        <TeacherTile
          key={user.id}
          id={user.id}
          firstName={user.first_name}
          lastName={user.last_name}
          email={user.email}
          picture={user.profile_photo}
          short_bio={user.short_bio}
          lessonLocation={user.lesson_location}
          zip={user.zip}
          instrument_id={this.props.params.id}
          handleDelete = {handleDelete}
          current_user = {this.state.current_user}
          calendar = {user.calendar}
        />
      )
    })
    let addTeacherFeature
    if (this.state.current_user.role === "teacher"){
      addTeacherFeature = <button className="add-teacher-button" onClick={this.handleSubmit}>Click Here if you want to add yourself as a teacher for {this.state.currentInstrument}!</button>
    } else {
      addTeacherFeature = "Click on a teacher to learn more!"
    }

    return(
      <div>
        <div className="instrument-lesson-teachers-heading">
          <p>{this.state.currentInstrument} Lesson Teachers</p>
        </div>
        <div className="center-teacher-button">
          {addTeacherFeature}
        </div>
        {users}
      </div>
    )
  }
}

export default TeachersContainer;
