import React, { Component } from 'react';
import '../../styles/productlist.css';
const axios = require('axios');


class UserList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userListArray: []
    };
  }

  componentDidMount() {
    axios
      .get('https://limitless-peak-19224.herokuapp.com/users')
      .then(response => {
        let userListArray = response.data.results.map(user => {
          console.log(user);
          return (
            <div className="card-product-single-wrapper" key={user._id}>
              <div className="imgContainer">
              </div>
              <div className="productInfo">
                <h4 className="productName">
                    {user.username}
                </h4>
              </div>
            </div>
          );
        });
        this.setState({
          userListArray: userListArray
        });
      });
  }
  render() {
    return (
      <div className="allProducts">
      <style>@import url('https://fonts.googleapis.com/css?family=Sanchez');</style>
        <h1 className="productsListTitle">All Registered Users</h1>
        <div className="product-cards">
          {this.state.userListArray}
        </div>
      </div>
    );
  }
}

export default UserList;
