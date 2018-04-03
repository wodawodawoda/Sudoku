import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Field from './Field'

class Board extends Component {
  fields() {
    return [...this.props.template].map((val, idx) => <Field key={idx} id={idx} value={val} />)
  }
  render() {
    return(
      <div className="board" onInput={event => this.props.changeSum(event.target)}>
        {this.fields()}
      </div>
    )
  }
}

export default Board