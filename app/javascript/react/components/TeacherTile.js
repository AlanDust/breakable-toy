import React, { Component } from 'react';
import { Link } from 'react-router';

class TeacherTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {

    let deleteTeacherFeature
    if (this.props.current_user.role === "teacher" && this.props.current_user.id === this.props.id){
      deleteTeacherFeature = <button className="delete-button" onClick ={this.props.handleDelete} type="delete" value="delete" >
        <span className="delete-x">x</span>
      </button>

    }
    return(
      <div className="large-12 medium-12 small-12 column users">
        <div className="large-1 medium-1 small-1 column x">
          {deleteTeacherFeature}
        </div>
        <div className="large-11 medium-11 small-11 column">
          <Link to={`/instruments/${this.props.instrument_id}/users/${this.props.id}`}>
            <div className="large-4 medium-4 small-12 column small-picture">
              <img className="index-page-image" src={this.props.picture} />
            </div>
            <div className="large-5 medium-5 small-12 column name-city">
              <h1>{this.props.firstName} {this.props.lastName}</h1>
              <h3>{this.props.lessonLocation}</h3>
            </div>
            <div className="large-3 medium-3 small-12 column bio">
              <p>{this.props.short_bio}</p>
            </div>
          </Link>
        </div>
      </div>
    )
  }
}

export default TeacherTile
