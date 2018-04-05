import React, {Component} from 'react';
import Field from './Field';

class Board extends Component {
  fields() {
    let col = -1;
    let row = -1;
    return [...this.props.template].map((val, idx) => {
      if(!(idx % 9)) {
        col++;
        row = 0;
      } else {
        row++;
      }
      return <Field key={idx} id={`p${col}-${row}`} value={val} />;
    });
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