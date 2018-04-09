import React, {Component} from 'react';
import Field from './Field';
import _ from 'lodash';

class Board extends Component {
  fields() {
    // let col = -1;
    // let row = -1;
    const items = [...this.props.template].map((val, idx) => {
      // if(!(idx % 9)) {
      //   col++;
      //   row = 0;
      // } else {
      //   row++;
      // }
      return <Field key={idx} id={idx} value={val} />;
    })
    return _.chunk(items, 9).map(function(group, idx) {
      return <tr key={idx} className="board__row">{group}</tr>
    });
  }
  render() {
    return(
      <table className="board" onInput={event => this.props.changeSum(event.target)}>
        <tbody>
        {this.fields()}
        </tbody>
      </table>
    )
  }
}

export default Board