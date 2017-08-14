import React, { Component } from 'react';
import Header from './Header.js';
import Footer from './Footer.js';

const axios = require('axios');

class BaseLayout extends Component {
  constructor(props) {
    super(props);
    console.log("STARTING/OVERWRITING STATE IN BASELAYOUT!!!");

    this.state = {
      status: {
        cartArray: [],
        userId: '',
        username: '',
        isAdmin: false
      }
    };
  }

  validateUser(username, pswd) {
    console.log('attempting login...');
    axios
      .post('https://limitless-peak-19224.herokuapp.com/login', {
        username: username,
        pswd: pswd
      })
      .then(response => {
        console.log('response from the database: ');
        console.log(response);
        console.log('...now setting state in baselayout...');
        this.setState({
          status: {
            cartArray: this.state.status.cartArray,
            userId: response.data.userId || this.state.status.userId,
            username: response.data.username || this.state.status.username,
            isAdmin: response.data.isAdmin || this.state.status.username
          }
        });
        return;
      });
  }

  checkStatus(status) {
    if (status) {
      this.setState({
        status: status
      });
    }
    return;
  }

  render() {
    console.log("current status in baselayout: ");
    console.log(this.state.status);
    let validateUser = this.validateUser.bind(this);
    let checkStatus = this.checkStatus.bind(this);
    let options = { status: this.state.status };
    return (
      <div>
        <Header validateUser={validateUser} checkStatus={checkStatus} status={this.state.status}/>
        {React.cloneElement(this.props.children, options)}
        <Footer />
      </div>
    );
  }
}

export default BaseLayout;
