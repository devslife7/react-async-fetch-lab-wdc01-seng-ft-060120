import React, { Component } from 'react'

export class App extends Component {
  state = {
    peopleInSpace: []
  }
  render() {
    return (
      <div>
      </div>
    )
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
    .then(resp => resp.json())
    .then(peopleData => {
      let peopleInSpace = [...this.state.peopleInSpace, peopleData.people]
      this.setState({ peopleInSpace })
    })
  }
}

export default App
