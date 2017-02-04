import React from 'react';

var styleCont = {
  float: 'right',
  width: '75%'
}

var styleImgSelected = {
    width: '100%'
}

class Visor extends React.Component {
  render() {
    return (
      <div style={styleCont} className='visor'>
        <img style={styleImgSelected} src={this.props.imgSelected}/>
      </div>
    );
  }
}
export default Visor;
