import React, { Component } from 'react';
import '../../styles/productlist.css';
const axios = require('axios');


class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productListArray: [],
      status: this.props.status
    };
  }

  componentDidMount() {
    axios
      .get('https://limitless-peak-19224.herokuapp.com/products')
      .then(response => {
        let productListArray = response.data.results.map(product => {
          let url = '/products/' + product._id;
          return (
            <div className="card-product-single-wrapper" key={product._id}>
              <div className="imgContainer">
                <a href={url}>
                  <img
                    className="productImage"
                    src={product.picture}
                    alt={product.name}
                  />
                </a>
              </div>
              <div className="productInfo">
              <a className="cardLink" href={url}>
                <h4 className="productName">
                    {product.name}
                </h4>
              </a>
                <b className="price">
                  ${product.price}
                </b>
              </div>
            </div>
          );
        });
        this.setState({
          productListArray: productListArray
        });
      });
  }
  render() {
    console.log('current status in ProductList: ');
    console.log(this.state.status);
    return (
      <div className="allProducts">
      <style>@import url('https://fonts.googleapis.com/css?family=Sanchez');</style>
        <h1 className="productsListTitle">Shop All Products</h1>
        <div className="product-cards">
          {this.state.productListArray}
        </div>
      </div>
    );
  }
}

export default ProductList;
// functionality issue:::
