import React from 'react';

class LeftPanel extends React.Component {
 render() {
   var panelStyle = {
     width: '25%',
     backgroundColor: 'rgb(189, 224, 214)',
     padding: '1em',
     boxSizing: 'border-box',
     height: '100vh'
   }
  return (
    <div style={panelStyle} className="leftPanel">Select some photos</div>
   );
 }
}
export default LeftPanel;
