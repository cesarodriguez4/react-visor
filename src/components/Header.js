import React from 'react';

var flickrLogo = require('../images/flickr-logo.png');

var fLogoStyle = {
  width: '5%',
  float: 'right'
}

var headerStyle = {
  width: '100%',
  backgroundColor: '#0063dc',
  padding: '1em',
  color: 'white',
  fontFamily: 'open sans',
  fontSize: 'small',
  fontWeight:'bold',
  lineHeight: '5',
  paddingLeft: '3%',
  boxSizing: 'border-box'
}

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(), 1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <header style={headerStyle}>
        { this.state.date.toLocaleTimeString() }
        <img style={fLogoStyle} src={flickrLogo}></img>
      </header>
    );
  }
}

export default Header;
