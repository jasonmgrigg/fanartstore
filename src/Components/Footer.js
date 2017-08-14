import React, { Component } from 'react';
import '../styles/footer.css';

class Footer extends Component {
  constructor(props) {
    super(props);

    this.handleAdminName = this.handleAdminName.bind(this);
    this.handleAdminPassword = this.handleAdminPassword.bind(this);

    this.state = {adminName: ''};
    this.state = {adminPassword: ''};
  }

  handleAdminName(event){
    this.setState({adminName: event.target.value});
  }
  handleAdminPassword(event){
    this.setState({adminPassword: event.target.value});
  }

  addToListAdmin = (event) => {
      event.preventDefault();
      this.setState({adminName: event.target.value, adminPassword: event.target.value});
      console.log("Admin Username      " + this.state.adminName);
      console.log("Admin Password     " + this.state.adminPassword);
  }

  render() {
    return (
      <div className="footerContainer">
        <form className="footerForm">
          <h1 className="footerTitle">
          ©Fandomonium.Inc
          </h1>
          <div className="adminLoginContainer">
            <label className="adminLoginTitle">
              Admin Login
            </label>
            <br />
            <input className="adminLoginForm" onChange={this.handleAdminName} type="text" value={this.state.adminName} placeholder="Admin:"/>
            <br />
            <input className="adminLoginForm" onChange={this.handleAdminPassword} type="text" value={this.state.adminPassword} placeholder="Password"/>
            <br />
            <button className="loginSubButton" type="submit" onClick={this.addToListAdmin}>Login<i className="submitButton" aria-hidden="true"></i></button>
          </div>
        </form>
      </div>

    )
  }
}

export default Footer;
