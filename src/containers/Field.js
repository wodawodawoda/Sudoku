import React, {Component} from 'react';

class Field extends Component {
  render() {
    if(this.props.value !== ".") {
      return <div className="board__field" id={this.props.id}>{this.props.value}</div>
    } else {
      return <input type="tel" pattern="[1-9]{1}" maxLength="1" className="board__field board__field--input" id={this.props.id}/>
    }
  }
}

export default Field


// import React, {Component} from 'react';
//
// class Field extends Component {
//   render() {
//     const edit = this.props.value === '.';
//     return (
//       <div className={edit ? 'board__field edit' : 'board__field'}
//            name={this.props.value}
//            contentEditable={edit}
//       >
//         {!edit ? this.props.value : ''}
//       </div>
//     )
//   }
// }
//
// export default Field