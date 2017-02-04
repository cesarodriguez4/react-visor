import React from 'react';
import Thumb from './Thumb.js';

var font = {
  textAlign: 'center',
  lineHeight: '2',
  color: 'white',
  fontFamily: 'open sans',
  fontSize: 'medium'
}
var panelStyle = {
  width: '25%',
  backgroundColor: '#ff0084',
  boxSizing: 'border-box',
  height: '100vh',
  float: 'left'
}
var thumbStyle = {
  width: '100%'
}

class LeftPanel extends React.Component {

  images = this.props.src.map((photo)=>
    <Thumb click={this.props.handleClick.bind(this, photo)} style={thumbStyle} key={photo.id} src={photo} />
  );

 render() {
  return (
    <div style={panelStyle} className="leftPanel">
      <p style={font}>Select some photos</p>
      {this.images}
    </div>);
 }
}
export default LeftPanel;
