import React, { Component } from 'react';
import '../../styles/productsingle.css';
const axios = require('axios');
// import { NavLink } from 'react-router-dom';
class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productData: {}
    };
  }

  componentDidMount() {
    axios.get(`https://limitless-peak-19224.herokuapp.com/products/${this.props.match.params.productId}`)
    .then(resp => {
      console.log(resp);
      this.setState({
        productData: resp.data
      })
    })
  }

  checkOut = event => {
    event.preventDefault();
    let url = `/checkout/${this.props.match.params.productId}`;
    window.location = url;
  }

  render() {
    return (
      <div>

        <div className="productSingleContainer">

        <style>@import url('https://fonts.googleapis.com/css?family=Sanchez');</style>
        <style>@import url('https://fonts.googleapis.com/css?family=Arimo');</style>
          <div className="product-single-wrapper">
            <div className="imageContainer">
              <h1>Cart</h1>
              <img className="productImageSingle" src={this.state.productData.picture} alt={this.state.productData.name}/>
            </div>
            <div className="productInfoSingle">
              <h4 className="productNameSingle">{this.state.productData.name}</h4>
            <div className="priceCart">
              <span className="priceSingle">${this.state.productData.price}</span>
              <button className="checkoutButton" type="submit" onClick={this.checkOut} > Go to Checkout>>></button>

            </div>
              <div className="productDescriptionSingle">
                <p className="descriptionHeader">Description:</p>
                <p className="descriptionContent">{this.state.productData.description}</p>
              </div>
              <br/>
              <br/>
            </div>
          </div>
      </div>
    </div>
    );
  }
}
export default Cart;
