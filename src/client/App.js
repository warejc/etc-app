import React, { Component } from 'react';
import './app.css';
import {Button, Icon, Navbar, NavItem} from 'react-materialize'

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
        <Navbar brand='ETC' className='black' right>
          <NavItem>Photography</NavItem>
          <NavItem>Content</NavItem>
          <NavItem>Music</NavItem>
        </Navbar>

    );
  }
}
