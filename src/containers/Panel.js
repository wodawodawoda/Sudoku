import React, {Component} from 'react';
import ReactInterval from 'react-interval';

class Panel extends Component {
  constructor (props) {
    super(props);
    this.state = {
      enabled: false,
      timeout: 1000,
      count: 0
    }
    this.onToggleDestroy = this.onToggleDestroy.bind(this)
  }
  onToggleDestroy() {
    const {destroy} = this.state;
    console.log('elo')
    this.setState({count: 0, destroy: !destroy, enabled: false});
  }
  render() {
    const {timeout, enabled, count} = this.state;
    return(
      <div className="panel">
        <div className="panel__start">
        <button className="panel__btn panel__btn--new-game"
                onClick={event => {
                  this.setState({enabled: true, count: 0});
                  return this.props.click(event);
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
                    this.setState({enabled: false})
                  }}>
            solve
          </button>
        </div>

         <ReactInterval {...{timeout, enabled}}
                        callback={() => this.setState({count: this.state.count + 1})} />
        <div className="panel__timer">Time: {count}</div>
      </div>
    );
  }
}

export default Panel