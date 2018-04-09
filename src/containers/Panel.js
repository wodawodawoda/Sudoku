import React, {Component} from 'react';
import ReactInterval from 'react-interval';

class Panel extends Component {
  constructor (props) {
    super(props);

  }
  componentDidMount(prevProps) {
    console.log(prevProps)
  }

  render() {
    const {timeout, enabled, count} = this.props.state;
    return(
      <div className="panel">
        <div className="panel__start">
        <button className="panel__btn panel__btn--new-game"
                onClick={event => {
                  this.props.reset();
                  this.props.click(event);
                }}>
          new game
        </button>
        <select name="difficulties" id="panelSelect" className="panel__select">
          <option value="easy" className="panel__option">easy</option>
          <option value="medium" className="panel__option">medium</option>
          <option value="hard" className="panel__option">hard</option>
          <option value="very-hard" className="panel__option">very-hard</option>
          <option value="insane" className="panel__option">insane</option>
          <option value="inhuman" className="panel__option">inhuman</option>
        </select>
          <button className="panel__btn panel__btn--solve"
                  onClick={() => {
                    this.props.solve();
                    this.props.pause();
                  }}>
            solve
          </button>
        </div>

         <ReactInterval {...{timeout, enabled}}
                        callback={() => this.props.count()} />
        <div className="panel__timer">Time: {count}</div>
      </div>
    );
  }
}

export default Panel