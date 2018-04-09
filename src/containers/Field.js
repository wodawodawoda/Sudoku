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
      <td className={`board__field board__field${this.props.id}`}
          id={'field-' + this.props.id}>
        {field}
      </td>
    )
  }
}



export default Field