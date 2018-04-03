import React, {Component} from 'react';
import Stoper from './Stoper'

class Panel extends Component {
  render() {
    return(
      <div className="panel">
        <button className="panel__btn" onClick={this.props.click}>new game</button>
        <Stoper run={this.props.run} getTime={this.props.getTime}/>
      </div>
    )
  }
}

export default Panel