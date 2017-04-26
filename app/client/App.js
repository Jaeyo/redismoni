import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      id: 0,
      title: '-',
    }
  }

  componentDidMount() {
    fetch('/test/')
      .then(resp => resp.json())
      .then(({id, title}) => this.setState({ id, title }))
  }

  render() {
    const { id, title } = this.state
    return (
      <div className="App">
        <div className="App-header">
          <h2>{id}</h2>
          <h2>{title}</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
