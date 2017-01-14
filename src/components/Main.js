require('normalize.css');
require('../styles/App.css');

import React from 'react';
import Header from './Header';
import LeftPanel from './LeftPanel';
import Visor from './Visor';

import img1 from '../images/675273.jpg';
import img2 from '../images/aqetyr.jpg';

var images = [
  img1,
  img2
]


class AppComponent extends React.Component {

  constructor(props) {
      super(props);
      this.state = {imgSelected: ''};
  }

  componentDidMount() {
    this.setState({imgSelected: 'Ninguno Seleccionado'});
  }

  render() {
    return (
    <div className="Main">
      <Header />
      <LeftPanel src={images} />
      <Visor imgSelected={this.state.imgSelected} />
    </div>
    );
  }
}

export default AppComponent;
