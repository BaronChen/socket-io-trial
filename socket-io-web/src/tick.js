import React, { Component } from 'react';
import socketClient from './socketClient';

export default class Tick extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tick: 0
    };
    socketClient.subscribe('activity-feed', this.setTickState)
  }

  setTickState = (data) => {
    this.setState({
      tick: data.tick
    });
  }

  render() {
    return (
      <h1>tick: {this.state.tick}</h1>
    );
  }


}