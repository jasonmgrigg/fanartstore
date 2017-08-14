import React, { Component } from 'react';
import Header from '../Header.js';
import admin from './admin.js';

class adminWrapper extends Component {
  constructor (props) {
    super(props)
    this.setState = {
      cartArray: []
    }
  }

  render() {
    return (
    <div>
      <Header />
      <Admin />
    </div>
)
  }
}

export default adminWrapper;
