import React, { Component } from 'react';
import { Link } from 'react-router';

class TeacherTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return(
      <div className="large-12 medium-12 small-12 column users">
        <Link to={`/instruments/${this.props.instrument_id}/users/${this.props.id}`}>
          <div className="large-1 medium-1 small-12 column">
            <img className="index-page-image" src={this.props.picture} />
          </div>
          <div className="large-6 medium-6 small-12 column">
            <h1>{this.props.firstName} {this.props.lastName}</h1>
            <h2>{this.props.email}</h2>
            <h3>{this.props.lessonLocation}</h3>
          </div>
        </Link>

        <div className="large-4 medium-4 small-12 column bio">
          <p>{this.props.short_bio}</p>
        </div>
      </div>
    )
  }
}

export default TeacherTile
