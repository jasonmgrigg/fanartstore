import React, { Component } from 'react';
const axios = require ('axios');
class Receipt extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productData: {}
    }
  };

  componentDidMount() {
    axios.get(`https://limitless-peak-19224.herokuapp.com/products/${this.props.match.params.productId}`)
    .then(resp => {
      console.log(resp);
      console.log(this.state.productData);

      this.setState({
        productData: resp.data
      })
    })
  }
  render() {

    let subtotal = (this.state.productData.price);
    let tax = Math.round( subtotal * 0.0675 * 100 ) / 100;
    let total = (parseInt(subtotal) + tax).toFixed(2) ;
    return (
        <div className="receipt">
        <style>@import url('https://fonts.googleapis.com/css?family=Sanchez');</style>
          <h1 className="receiptHeader">
          Your Receipt:
          </h1>
          <form className="receiptForm">
            <ul className="receiptList">
              <li className="receiptItem">Item Name: {this.state.productData.name}</li>
              <li className="receiptItem">Price: ${this.state.productData.price}</li>
              <li className="receiptItem">Subtotal: ${subtotal}</li>
              <li className="receiptItem">Tax: ${tax.toFixed(2)}</li>
              <li className="receiptItem">Total: ${total}</li>
              <li className="receiptItemComment">Thank you very much for your business!</li>
            </ul>
          </form>
        </div>
    );
  }
}

export default Receipt;
