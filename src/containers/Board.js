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
      return <Field key={idx} id={idx + 1} value={val} />;
    })

    return _.chunk(items, 9).map(function(group, idx) {
      return <tr key={idx} className="board__row">{group}</tr>
    });
    // Match 9 squares prototype field = [[row],[row],[row],[row],[row]]
    // for(let i = 0; i < 9; i++) {
    //   let team = 1;
    //   if(i === 3 || i === 6) team = team + 3
    //   for(let j = 0; j < 9; j++) {
    //     if(j < 3) field[i][j].addClass(`team${team}`)
    //     else if(j < 6) field[i][j].addClass(`team${team + 1}`)
    //     else field[i][j].addClass(`team${team + 2}`)
    //   }
    // }
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