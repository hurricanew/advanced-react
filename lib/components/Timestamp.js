import React from 'react';

class Timestamp extends React.PureComponent {

  render(){
    return (<div>
      {this.props.timestamp.toString()}
    </div>);
  }
}
export default Timestamp;