import React, { Component } from 'react';
import './app.css';
import {Button, Icon} from 'react-materialize'

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
        <Button waves='light'>
          <Icon>thumb_up</Icon>
       </Button>
      </div>
    );
  }
}
