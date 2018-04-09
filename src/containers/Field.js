import React, {Component} from 'react';

class Field extends Component {
  render() {
    if(this.props.value !== ".") {
      return <td className={`board__field board__field${this.props.id}`} id={this.props.id}>{this.props.value}</td>
    } else {
      return <td className={`board__field board__field${this.props.id}`} id={this.props.id}><input type="tel" pattern="[1-9]{1}" maxLength="1" tabIndex="0" className="board__field board__field--input" id={this.props.id}/></td>
    }
  }
}



export default Field