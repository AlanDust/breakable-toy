import React, { Component } from 'react';
import InstrumentTile from '../components/InstrumentTile'
import TeachersContainer from './TeachersContainer'

class InstrumentContainer extends Component {
  constructor (props) {
    super(props);
    this.state = {
      instrumentList: [],
      userList: [],
      error: ""
    }
  }

  componentDidMount() {
  fetch("/api/v1/instruments")
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
    this.setState({ instrumentList: data })
  })
}

  render() {
    let instrumentTiles = this.state.instrumentList.map(instrument => {
      return(
        <InstrumentTile
          key={instrument.id}
          id={instrument.id}
          name={instrument.name}
          picture={instrument.picture}
        />
      )
    })

    return (
      <div>
        <h1 className="welcome"> Welcome to the Music Lesson Teacher Finder </h1>
        <h3 className="sub-welcome"> Click on an instrument to find a teacher</h3>
        {instrumentTiles}
      </div>
    )
  }
}

export default InstrumentContainer;
