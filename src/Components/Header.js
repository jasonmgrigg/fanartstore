import React, { Component } from 'react';
import '../styles/header.css';
import NavBar from './HomePage/NavBar.js';
// import Search from './Admin/Search.js';

class Header extends Component {
  constructor(props) {
    super(props);

    this.handleUserName = this.handleUserName.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.showMore = this.showMore.bind(this, true);
    this.handleStringChange = this.handleStringChange.bind(this);

    this.state = {
      username: '',
      password: '',
      contributors: [
        {
          name: 'Brittany Arsi',
          link: 'https://www.linkedin.com/in/brittany-arsi/'
        },
        {
          name: 'Lula Goodwin',
          link: 'https://www.linkedin.com/in/lula-goodwin-ba33a4142/'
        },
        {
          name: 'Robert Garmhausen',
          link: 'https://www.linkedin.com/in/robert-garmhausen-56875374/'
        },
        {
          name: 'Jason Grigg',
          link: 'https://www.linkedin.com/in/jasonmgrigg/'
        },
        {
          name: 'Dylan Stump',
          link: 'https://www.linkedin.com/in/writer-dylan-stump/'
        }
      ],
      rowsToDisplay: 0,
      expanded: false,
      str: '',
      browse: <div />,
      status: this.props.status
    };
  }

  handleUserName(event) {
    this.setState({ username: event.target.value });
  }
  handlePassword(event) {
    this.setState({ password: event.target.value });
  }

  handleStringChange(event) {
    this.setState({ str: event.target.value });
  }

  doSearch = e => {
    e.preventDefault();
    console.log(this.state.str);
    let url = "/search/" + this.state.str;
    window.location = url;
  }

  doUserValidation = e => {
    e.preventDefault();
    console.log('attempting to validate the user...');
    this.setState({
      username: e.target.value,
      password: e.target.value
    });
    console.log('Username: ' + this.state.username);
    console.log('Password: ' + this.state.password);
    let userItem = this.props.validateUser(this.state.username, this.state.password);
  }

  showMore() {
    this.state.rowsToDisplay === 0
      ? this.setState({
          rowsToDisplay: this.state.contributors.length,
          expanded: true
        })
      : this.setState({ rowsToDisplay: 0, expanded: false });
  }

  addToListUser = event => {
    event.preventDefault();
    this.setState({
      username: event.target.value,
      password: event.target.value
    });
    console.log('Username      ' + this.state.username);
    console.log('Password     ' + this.state.password);
    let userItem = {
      username: this.state.username,
      password: this.state.password
    };

    fetch('https://limitless-peak-19224.herokuapp.com/newuser', {
      method: 'POST',
      body: userItem,
      headers: {
        Accept: 'application/json',
        Authorization: 'Basic',
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .then(response => {
        console.log(response, 'Hey it worked!');
      })
      .catch(err => {
        console.log(err, 'Something broke, try again');
      });
    this.setState({ username: '', password: '' });
  };

  render() {
    return (
      <div className="fullHeader">
      <style>@import url('https://fonts.googleapis.com/css?family=Monoton');</style>
      <style>@import url('https://fonts.googleapis.com/css?family=Architects+Daughter');</style>
      <style>@import url('https://fonts.googleapis.com/css?family=Arimo');</style>
      <style>@import url('https://fonts.googleapis.com/css?family=Chewy');</style>
        <div className="topHeaderContainer">
          <div className="pageLogo">

            <a className="headerTitle" href="/">Fandomonium</a>

            <h3 className="headerSubtitle">Custom Fan Art</h3>
          </div>
          <div className="searchContainer">
            <form className="searchForm">
              <input
                className="searchInput"
                placeholder="search for items"
                onChange={this.handleStringChange}
                type="text"
                value={this.state.str}
              />
              <button
                className="searchButton"
                type="submit"
                onClick={this.doSearch}
              >
                <img className="searchIcon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Magnifying_glass_icon.svg/1024px-Magnifying_glass_icon.svg.png" alt="No Image"/>
              </button>
            </form>
          </div>
          <form>
            <div className="userLoginContainer">
              <input
                className="userLoginForm"
                name="username"
                onChange={this.handleUserName}
                type="text"
                value={this.state.username}
                placeholder="Username:"
              />
              <br />
              <input
                className="userLoginForm"
                name="password"
                onChange={this.handlePassword}
                type="password"
                value={this.state.password}
                placeholder="Password"
              />
              <br />
              <button className="loginButton" type="submit" onClick={this.doUserValidation}>
                Login<i aria-hidden="true" />
              </button>
            </div>
          </form>
        </div>

        <div className="navigation">
          <div className="allContributorsContainer">
            <div className="allContributorsColumn">
              <ul className="contributeList">
                {this.state.contributors
                  .slice(0, this.state.rowsToDisplay)
                  .map((contributors, i) =>
                    <li key={i}>
                      <a
                        className="contributorsListItem"
                        href={contributors.link}
                      >
                        {contributors.name}
                      </a>
                    </li>
                  )}
              </ul>
              <p>
                <a onClick={this.showMore}>
                  {this.state.expanded
                    ? <span className="showMore">- Hide -</span>
                    : <span className="showMore">About Us+</span>}
                </a>
              </p>
            </div>
          </div>

          <NavBar />

        </div>
      </div>
    );
  }
}

export default Header;
