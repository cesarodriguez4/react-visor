import React from 'react';

class Thumb extends React.Component {

    render() {
      return (
        <div className='thumb'>
          <img onClick={this.props.click} style={this.props.style} src={this.props.src}></img>
        </div>
      );
      }
}
export default Thumb ;
