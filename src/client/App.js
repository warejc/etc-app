import React, { Component } from 'react';
import './app.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { username: null };
  }

  componentDidMount() {
    console.log('component mounted!!');
  }

  render() {
    return (
      <div>
      Hello WORLD!!
      </div>
    );
  }
}
