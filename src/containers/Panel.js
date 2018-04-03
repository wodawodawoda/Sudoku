import React, {Component} from 'react';
import Stoper from './Stoper'

class Panel extends Component {
  render() {
    return(
      <div className="panel">
        <button className="panel__btn" onClick={this.props.solve}>solve</button>
        <button className="panel__btn" onClick={event => this.props.click(event)}>new game</button>

        <select name="difficulties" id="panelSelect" className="panel__select">
          <option value="easy" className="panel__option">easy</option>
          <option value="medium" className="panel__option">medium</option>
          <option value="hard" className="panel__option">hard</option>
          <option value="very-hard" className="panel__option">very-hard</option>
          <option value="insane" className="panel__option">insane</option>
          <option value="inhuman" className="panel__option">inhuman</option>
        </select>
        <Stoper run={this.props.run} getTime={this.props.getTime}/>
      </div>
    )
  }
}

export default Panel