import React, {Component} from 'react';

const difficultyOptions = [
  'easy',
  'medium',
  'hard',
  'very-hard',
  'insane',
  'inhuman'
]

class NewGame extends Component {
  options() {
    return difficultyOptions.map((val, idx) => {
      return <option key={idx} value={val} className={`${this.props.component}__option`}>{val}</option>
    })
  }
  render() {
    return(
      <div className={`${this.props.component}__start`}>
        <button className={`${this.props.component}__btn ${this.props.component}__btn--new-game`}
                onClick={event => {
                  this.props.reset(); // Reset timer
                  this.props.click(event); // Setup new sudoku board
                }}>
          new game
        </button>
        <select name="difficulties" id="panelSelect" className="panel__select">
          {this.options()}
        </select>
        {this.solve()}
      </div>
    );
  }
  solve() {
    if(this.props.component !== 'win') {
      return(
        <button className="panel__btn panel__btn--solve"
                onClick={() => {
                  this.props.solve(); // Display solved sudoku board
                  this.props.pause(); // Pause time
                }}>
          solve
        </button>
      )
    }
  }
}

export default NewGame;