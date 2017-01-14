import React from 'react';

var styleCont = {
  float: 'right'
}

class Visor extends React.Component {
  render() {
    return (
      <div style={styleCont} className='visor'>
        {this.props.imgSelected}
      </div>
    );
  }
}
export default Visor;
