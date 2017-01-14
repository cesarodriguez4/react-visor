import React from 'react';

class Thumb extends React.Component {
    constructor(props) {
      super(props);
      this.click = this.click.bind(this);
    }

    click(value) {
      alert(value);
    }

    render() {
      return (
        <div className='thumb'>
          <img onClick={this.click.bind(null, this.props.src)} style={this.props.style} src={this.props.src}></img>
        </div>
      );
      }
}
export default Thumb ;
