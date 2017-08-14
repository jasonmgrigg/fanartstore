import React, { Component } from 'react';

class Review extends Component {
  constructor(props) {
    super(props);

    this.handleproductId = this.handleproductId.bind(this);
    this.handleusername = this.handleusername.bind(this);
    this.handlereview = this.handlereview.bind(this);
    this.handlerating = this.handlerating.bind(this);

    this.state = {
      productId: '',
      username: '',
      review: '',
      rating: ''
    };
  }

  handleproductId(event) {
    this.setState({ productId: event.target.value });
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

  addToRatingList = event => {
    event.preventDefault();
    this.setState({
      productId: event.target.value,
      username: event.target.value,
      review: event.target.value,
      rating: event.target.value
    });
    let addReview = JSON.stringify(this.state);

    fetch('https://limitless-peak-19224.herokuapp.com/newreview', {
      method: 'POST',
      body: addReview,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        console.log(response, 'Item added!');
      })
      .catch(err => {
        console.log(err, 'Item not added, try again');
      });
    this.setState({ productId: '', username: '', review: '', rating: '' });
  };

  render() {
    return (
      <div>
        <form
          method="POST"
          action="https://limitless-peak-19224.herokuapp.com/newreview"
        >
          <h1 className="productAddReview">
            This is where we will add Reviews:
          </h1>
          <ul>
            <div className="productReviewContainer">
              <li className="productAddReview">
                <input
                  className="productReviewForm"
                  name="productId"
                  onChange={this.handleproductId}
                  type="text"
                  value={this.state.productId}
                  placeholder="Product ID:"
                />
              </li>
              <li className="productAddReview">
                <input
                  className="productReviewForm"
                  name="username"
                  onChange={this.handleusername}
                  type="text"
                  value={this.state.username}
                  placeholder="Username:"
                />
              </li>
              <li className="productAddReview">
                <input
                  className="productReviewForm"
                  name="review"
                  onChange={this.handlereview}
                  type="text"
                  value={this.state.review}
                  placeholder="Review:"
                />
              </li>
              <li className="productAddReview">
                <input
                  className="productReviewForm"
                  name="rating"
                  onChange={this.handlerating}
                  type="text"
                  value={this.state.rating}
                  placeholder="Rating:"
                />
              </li>
              <li className="productAddReview">
                <button className="productAddSubButton" type="submit">
                  Add Item<i className="submitButton" aria-hidden="true" />
                </button>
              </li>
            </div>
          </ul>
        </form>
      </div>
    );
  }
}

export default Review;
