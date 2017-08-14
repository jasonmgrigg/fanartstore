import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom';

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.showMore = this.showMore.bind(this, true);

    this.state = {
      navigation: [
        {'name': 'Home', 'link': '/'},
        {'name': 'Products', 'link': '/Products'},
        {'name': 'Admin', 'link': '/Admin'}
        ],
      rowsToDisplay : 0,
      expanded: false,
      }
  }

  showMore() {
    this.state.rowsToDisplay === 0 ?
    (this.setState({ rowsToDisplay: this.state.navigation.length, expanded: true })) :
    (this.setState({ rowsToDisplay: 0, expanded: false }))
  }

  render() {
    return (

      <div className= "navDiv">
      <div className="allNavigationContainer">
        <div className="allNavigationColumn">
          <ul className="navList">
            {this.state.navigation.slice(0,this.state.rowsToDisplay).map((navigation, i) => <li key={i}>
            <a className="contributorsListItem" href={navigation.link}>{navigation.name}</a></li>)}
          </ul>
          <a onClick={this.showMore}>
              {this.state.expanded ?
                (<span className="showMore">- Hide -</span>) : (<span className="showMore">Site Navigation+</span>)}
          </a>
        </div>
      </div>
    </div>
    )
  }
}

export default NavBar;
