import React, { Component } from 'react';
import admin from './Components/Admin/admin.js';
import Receipt from './Components/Admin/Receipt.js';
import Header from './Components/Header.js';
import ProductSingle from './Components/Product/ProductSingle.js';

class BigContainer extends Component {
  constructor (props) {
    super (props);
    this.setState = {
      cartArray: [],
      username: '',
      password: ''
    }
  }
  render(){
    return (
      <div>
        console.log("username: ", "password: ");
        <Header />
        <admin />
        <Receipt />
        <ProductSingle />

      </div>
    )
  }
}
export default BigContainer;
        // <ProductList />
