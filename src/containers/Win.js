import React, {Component} from 'react';

class Win extends Component {
  componentDidMount() {
    this.props.pause() // Pause time
  }
  render() {
    return(
      <div className="win">
        <h1>You WIN</h1>
        <div className="win__start">
          <button className="win__btn win__btn--new-game"
                  onClick={event => {
                    this.props.reset(); // Reset timer
                    this.props.click(event); // Set up new sudoku board
                  }}>
            new game
          </button>
          <select name="difficulties" id="panelSelect" className="win__select">
            <option value="easy" className="panel__option">easy</option>
            <option value="medium" className="panel__option">medium</option>
            <option value="hard" className="panel__option">hard</option>
            <option value="very-hard" className="panel__option">very-hard</option>
            <option value="insane" className="panel__option">insane</option>
            <option value="inhuman" className="panel__option">inhuman</option>
          </select>
          <span className="win__time">Time: {this.props.count}</span>
        </div>
      </div>
    );
  }
}

export default Win