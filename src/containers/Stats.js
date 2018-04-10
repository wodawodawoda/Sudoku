import React, {Component} from 'react';

class Stats extends Component {
  constructor (props) {
    super(props);
    this.state = {
      showStats: false
    }
    this.toggleStats = this.toggleStats.bind(this)
  }
  toggleStats() {
    let show = false;
    this.state.showStats ? show = false : show = true;
    this.setState({showStats: show})
  }
  records() {
    return JSON.parse(localStorage.SudokuApp).map((val,idx) => {
      return (
          <div key={idx} className="stats__record">
            <span className='stats__index'>{idx}</span><span className="stats__level">{val.level}</span> <span className="stats__time">{val.time} sec</span>
          </div>
      );
    }).reverse()
  }
  render() {
    return(
      <div className="stats">
        <button onClick={this.toggleStats}>Show stats</button>
        <div className="stats__records">
          {this.state.showStats ? this.records() : null}
        </div>
      </div>
    );
  }
}

export default Stats;