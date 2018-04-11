import React, {Component} from 'react';

class Field extends Component {
  render() {
    let field = this.props.value;
    if(this.props.value === ".") {
      field = <input type="tel"
                     pattern="[1-9]{1}"
                     maxLength="1"
                     tabIndex="0"
                     className="board__field board__field--input"
                     id={this.props.id}/>
    }
    return (
      <td className="board__field"
          id={'field-' + this.props.id}
          aria-label={`${this.props.col + 1}-${this.props.row + 1}`}>
        {field}
      </td>
    );
  }
}



export default Field;