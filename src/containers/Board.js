import React, {Component} from 'react';
import Field from './Field';
import {chunk} from 'lodash';
import '../styles/board.sass';


class Board extends Component {
  constructor (props) {
    super(props);

    this.handleFocus = this.handleFocus.bind(this)
  }
  fields() {
    let col = -1;
    let row = -1;
    const items = [...this.props.template].map((val, idx) => {
      if(!(idx % 9)) {
        col++;
        row = 0;
      } else {
        row++;
      }
      return <Field key={idx} id={idx} value={val} col={col} row={row} />
    });

    return _.chunk(items, 9).map(function(group, idx) {
      return <tr key={idx} className="board__row">{group}</tr>
    });
  }
  // On board focus management
  handleFocus(event) {
    const inputs = document.querySelectorAll('input')
    const idx = [...inputs].indexOf(event.target); // Get index of focused input
    switch (event.keyCode) {
      case 39:
        let next = (idx === inputs.length - 1) ? 0 : idx + 1; // Prevent to focus outside the board
        inputs[next].focus();
        break;
      case 37:
        let prev = idx ? idx - 1 : inputs.length - 1; // Prevent to focus outside the board
        inputs[prev].focus();
        break;
    }
  }
  render() {
    return(
      <table className="board"
             onInput={event => this.props.changeSum(event.target)}
             onKeyUp={event => this.handleFocus(event)}>
        <tbody>
        {this.fields()}
        </tbody>
      </table>
    );
  }
}

export default Board;