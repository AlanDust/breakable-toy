import React, { Component } from 'react';
import InstrumentTile from '../components/InstrumentTile'

class InstrumentContainer extends Component {
  constructor (props) {
    super(props);
    this.state = {
      instrumentList: [],
      userList: [],
      error: "",
      current_user: {}
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
    this.setState({ instrumentList: data.instruments, current_user: data.current_user })
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

    let greeting
    if (this.state.current_user.role === "teacher"){
      greeting = "Click on an instrument to add yourself as a teacher"
    } else {
      greeting = "Click on an instrument to find a teacher"
    }

    return (
      <div>
        <div className="header">
          <h1 className="welcome"> Duet </h1>
          <h2 className="duet-description"> A website to connect music teachers with students</h2>
          <h3 className="sub-welcome"> {greeting} </h3>
        </div>
        <div className="instrument-tiles">
          {instrumentTiles}
        </div>
      </div>
    )
  }
}

export default InstrumentContainer;
