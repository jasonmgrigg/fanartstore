import React, { Component } from 'react';
import '../../styles/admin.css';
const axios = require('axios');

class Admin extends Component {
  constructor(props) {
    super(props);

    this.handleuserId = this.handleuserId.bind(this);
    this.handlepicture = this.handlepicture.bind(this);
    this.handlename = this.handlename.bind(this);
    this.handledescription = this.handledescription.bind(this);
    this.handleprice = this.handleprice.bind(this);
    this.handleUserName = this.handleUserName.bind(this);
    this.handlePassword = this.handlePassword.bind(this);

    this.state = {
      userId: '',
      picture: '',
      name: '',
      description: '',
      price: '',
      userName: '',
      password: '',
      users: [],
      username: ''
    };
  }

  handleuserId(event) {
    this.setState({ userId: event.target.value });
  }
  handlepicture(event) {
    this.setState({ picture: event.target.value });
  }
  handlename(event) {
    this.setState({ name: event.target.value });
  }
  handledescription(event) {
    this.setState({ description: event.target.value });
  }
  handleprice(event) {
    this.setState({ price: event.target.value });
  }
  handleUserName(event) {
    this.setState({ username: event.target.value });
  }
  handlePassword(event) {
    this.setState({ password: event.target.value });
  }

  addToProductList = event => {
    event.preventDefault();
    this.setState({
      userId: event.target.value,
      picture: event.target.value,
      name: event.target.value,
      description: event.target.value,
      price: event.target.value
    });
    console.log('User ID is:     ' + this.state.userId);
    console.log('Picture URL is:      ' + this.state.picture);
    console.log('Name is:     ' + this.state.name);
    console.log('Description is:      ' + this.state.description);
    console.log('Price is:       ' + this.state.price);

    axios
      .post('https://limitless-peak-19224.herokuapp.com/newproduct', {
        userId: this.state.userId,
        picture: this.state.picture,
        name: this.state.name,
        description: this.state.description,
        price: this.state.price
      })
      .then(response => {
        console.log(response, 'Item added!');
      })
      .catch(err => {
        console.log(err, 'Item not added, try again');
      });
    this.setState({
      userId: '',
      picture: '',
      name: '',
      description: '',
      price: ''
    });
  };

  addToUsers = event => {
    event.preventDefault();
    this.setState({
      userName: event.target.value,
      password: event.target.value
    });
    console.log('UserName is:     ' + this.state.username);
    console.log('Password is:     ' + this.state.password);

    axios
      .post('https://limitless-peak-19224.herokuapp.com/newuser', {
        username: this.state.username,
        password: this.state.password
      })
      .then(response => {
        console.log(response, 'Hey it worked!');
      })
      .catch(err => {
        console.log(err, 'Something broke, try again!');
      });
    this.setState({ userName: '', password: '' });
  };

  render() {
    return (
      <div className="adminForms">
      <style>@import url('https://fonts.googleapis.com/css?family=Sanchez');</style>
        <form className="addProduct">
          <h1 className="productAddTitle">
            Add a Product:
          </h1>
          <ul>
            <div className="productEntryContainer">
              <li className="productAddList">
                <input
                  className="productAddForm"
                  name="userId"
                  onChange={this.handleuserId}
                  type="text"
                  value={this.state.userId}
                  placeholder="User ID:"
                />
              </li>
              <li className="productAddList">
                <input
                  className="productAddForm"
                  name="picture"
                  onChange={this.handlepicture}
                  type="text"
                  value={this.state.picture}
                  placeholder="Picture URL:"
                />
              </li>
              <li className="productAddList">
                <input
                  className="productAddForm"
                  name="name"
                  onChange={this.handlename}
                  type="text"
                  value={this.state.name}
                  placeholder="Name:"
                />
              </li>
              <li className="productAddList">
                <input
                  className="productAddForm"
                  name="description"
                  onChange={this.handledescription}
                  type="text"
                  value={this.state.description}
                  placeholder="Description:"
                />
              </li>
              <li className="productAddList">
                <input
                  className="productAddForm"
                  name="price"
                  onChange={this.handleprice}
                  type="text"
                  value={this.state.price}
                  placeholder="Price:"
                />
              </li>
              <li className="productAddList">
                <button
                  className="productAddSubButton"
                  type="submit"
                  onClick={this.addToProductList}
                >
                  Add Item<i className="submitButton" aria-hidden="true" />
                </button>
              </li>
            </div>
          </ul>
        </form>

        <form className="addUser">
          <h1 className="adminUsers">Add a User:</h1>
          <div className="addUsersContainer">
            <ul className="usersAddList">
              <li>
                <input
                  className="usersAddForm"
                  name="username"
                  onChange={this.handleUserName}
                  type="text"
                  value={this.state.username}
                  placeholder="Username:"
                />
              </li>
              <li>
                <input
                  className="usersAddForm"
                  name="password"
                  onChange={this.handlePassword}
                  type="text"
                  value={this.state.Password}
                  placeholder="Password:"
                />
              </li>
              <li><input className="usersAddButton" name="admin" type="checkbox" id="adminCheck" value="checkbox"></input>
                <label htmlFor="adminCheck">Admin</label></li>
              <li>
                <button
                  className="usersAddSubButton"
                  type="submit"
                  onClick={this.addToUsers}
                >
                  Add User<i className="submitButton" aria-hidden="true" />
                </button>
              </li>

            </ul>
          </div>
        </form>
      </div>
    );
  }
}

export default Admin;
