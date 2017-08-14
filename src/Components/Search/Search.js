import React, { Component } from 'react';
import '../../styles/productlist.css';
import { NavLink } from 'react-router-dom';

const axios = require('axios');

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      totalCount: 0,
      productListArray: []
    };
  }

  componentDidMount() {
    axios
      .get(
        `https://limitless-peak-19224.herokuapp.com/products/search/${this.props.match.params.str}`
      )
      .then(response => {
        let productListArray = [];
        if (response.data.totalCount === 0) {
          productListArray = [<div>Nothing Found.</div>];
        } else {
          productListArray = response.data.results.map(product => {
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
                  <div className="prod-review" />
                </div>
              </div>
            );
          });
        }
        this.setState({
          productListArray: productListArray,
          totalCount: response.data.totalCount
        });
      });
  }

  render() {
    return (
      <div className="allProducts">
      <style>@import url('https://fonts.googleapis.com/css?family=Sanchez');</style>
        <div className="search-count">
          Results: {this.state.totalCount}
        </div>
      <div className="product-cards">
        <br />
        {this.state.productListArray}
      </div>
    </div>
    );
  }
}

export default Search;
