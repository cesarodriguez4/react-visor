
import React from 'react';

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
    var headerColor = {
      width: '100%',
      backgroundColor: '#4abf88',
      padding: '1em',
      color: 'white',
      fontFamily: 'open sans',
      fontSize: 'small',
      fontWeight:'bold'
    }

    return (
      <header style={headerColor}> { this.state.date.toLocaleTimeString() }</header>
    );
  }
}

export default Header;
