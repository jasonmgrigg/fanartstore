import React, { Component } from 'react';
import '../../styles/homepage.css';
import Carousel from './Carousel.js';

class Splash extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: this.props.status
    }
  }

  render() {
    console.log('current status in HomePage: ');
    console.log(this.state.status);
    return (
      <div className="App">
        <Carousel />
      </div>
    )
  }
}

export default Splash;
    // <Carousel />
    // import Carousel from './Carousel';
