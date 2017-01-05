require('normalize.css');

import React from 'react';
import Header from './Header';
import LeftPanel from './LeftPanel';

class AppComponent extends React.Component {
  render() {
    return (
    <div className="Main">
      <Header />
      <LeftPanel />
    </div>
    );
  }
}

export default AppComponent;
