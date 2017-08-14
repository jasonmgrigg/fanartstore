import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';
// import App from './STARS.js';
import '../../styles/productsingle.css';
// import ReactDOM from 'react-dom';

const axios = require('axios');

class ProductSingle extends Component {
  constructor(props) {
  super(props);

  this.handleproductId = this.handleproductId.bind(this);
  this.handleuserId = this.handleuserId.bind(this);
  this.handleusername = this.handleusername.bind(this);
  this.handlereview = this.handlereview.bind(this);
  this.handlerating = this.handlerating.bind(this);

      this.state = {
          data: {},
          reviewsArray: [],
          productId: '',
          userId: '',
          username: '',
          review: '',
          rating: '',
      };
  }

  handleproductId(event) {
    this.setState({ productId: event.target.value });
  }
  handleuserId(event) {
    this.setState({ userId: event.target.value });
  }
  handleusername(event) {
    this.setState({ username: event.target.value });
  }
  handlereview(event) {
    this.setState({ review: event.target.value });
  }
  handlerating(event) {
    this.setState({ rating: event.target.value });
  }


  componentDidMount() {
    axios.get(`https://limitless-peak-19224.herokuapp.com/products/${this.props.match.params.id}`)
    .then(data => {
      let reviewsArray = data.data.reviews.map(review => {
        return (
        <div className="productReview" key={review._id}>
          <p className="reviewUser">User</p>
          <div className="reviewRating">
            {review.rating > 4 ? (
              <div className="starReviews">
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
              </div>
            ) : review.rating  > 3 ? (
              <div className="starReviews">
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star-o" aria-hidden="true"></i>
              </div>
            ) : review.rating  > 2 ? (
              <div className="starReviews">
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star-o" aria-hidden="true"></i>
                <i className="fa fa-star-o" aria-hidden="true"></i>
              </div>
            ) : review.rating  > 1 ? (
              <div className="starReviews">
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star-o" aria-hidden="true"></i>
                <i className="fa fa-star-o" aria-hidden="true"></i>
                <i className="fa fa-star-o" aria-hidden="true"></i>
              </div>
            ) : review.rating > 1 ? (
              <div className="starReviews">
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star-o" aria-hidden="true"></i>
                <i className="fa fa-star-o" aria-hidden="true"></i>
                <i className="fa fa-star-o" aria-hidden="true"></i>
                <i className="fa fa-star-o" aria-hidden="true"></i>
              </div>
            ) : review.rating < 1 ? (
              <div className="starReviews">
                <i className="fa fa-star-o" aria-hidden="true"></i>
                <i className="fa fa-star-o" aria-hidden="true"></i>
                <i className="fa fa-star-o" aria-hidden="true"></i>
                <i className="fa fa-star-o" aria-hidden="true"></i>
                <i className="fa fa-star-o" aria-hidden="true"></i>
              </div>
            ) : (
              <span></span>
            )}</div>
          <p className="reviewContent">{review.review || "no review"}</p>
        </div>
      )

    });

    this.setState({ data: data.data, reviewsArray: reviewsArray})
    console.log(data);
  });
}

onStarClick(nextValue, prevValue, name) {
  console.log("nextValue: " + nextValue);
  console.log("PrevValue: " + prevValue);
  console.log("name: " + name);
  this.setState({rating: nextValue})
}

buyNow = event => {
  event.preventDefault();
  let url = `/cart/${this.props.match.params.id}`;
  window.location = url;
  }

addToReviews = event => {
  event.preventDefault();
  this.setState({
    productId: '',
    userId: '',
    username: '',
    review: event.target.value,
  });


  axios.post('https://limitless-peak-19224.herokuapp.com/newreview', {
      productId: this.props.match.params.id,
      userId: '5984bea3d757fa0004fa907f',
      username: 'timmy',
      review: this.state.review,
      rating: this.state.rating
    })
    .then(response => {
      console.log(response, 'Hey it worked!');
      let url ='/products/' + this.props.match.params.id;
      window.location = url;
  })
  .catch(err => {
      console.log(err, 'Something broke, try again!');
    });
  this.setState({ productId: '', userId: '', username: '', review: '', rating: '' });
};

render() {
  const { rating } = parseInt(this.state.rating);

  return(
  <div className="productSingleContainer">

  <style>@import url('https://fonts.googleapis.com/css?family=Sanchez');</style>
  <style>@import url('https://fonts.googleapis.com/css?family=Arimo');</style>
    <div className="product-single-wrapper">
      <div className="imageContainer">
        <img className="productImageSingle" src={this.state.data.picture} alt={this.state.data.name}/>
      </div>
      <div className="productInfoSingle">
        <h4 className="productNameSingle">{this.state.data.name}</h4>
        <div className="priceCart">
          <span className="priceSingle">${this.state.data.price}</span>
          <button className="cartButton" type="submit" onClick={this.buyNow} > Buy Now! </button>

        </div>
        <div className="productDescriptionSingle">
          <p className="descriptionHeader">Description:</p>
          <p className="descriptionContent">{this.state.data.description}</p>
        </div>
        <br/>
        <br/>
      </div>
    </div>
    <div className="reviewContainer">
      <h4 className="productReviews">Review this product:</h4>
      <div>
          <StarRatingComponent
              name="rate1"
              starCount={5}
              value={rating}
              onStarClick={this.onStarClick.bind(this)}
          />
      </div>
      <form className="reviewForm">

      <textarea className="reviewInput" name="review" onChange={this.handlereview} type="text" value={this.state.review} rows="8" cols="50" placeholder="write a review..."></textarea>
      <br/>
      <div>
      <button className="submitReview" type="submit" onClick={this.addToReviews}>Submit<i className="submitButton" aria-hidden="true" /></button>
      </div>

    </form>
    </div>
    <h4 className="reviewsListTitle">Product Reviews:</h4>
    <div className="productReviewDiv">
      {this.state.reviewsArray}
    </div>
  </div>
  )
}
}
export default ProductSingle;
