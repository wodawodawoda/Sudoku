import React, {Component} from 'react';
import NewGame from './NewGame';
import '../styles/win.sass';

class Win extends Component {
  componentWillMount() {
    this.props.pause(); // Pause time
    this.storeData();
  }

  // Store games statistics
  storeData() {
    const date = () => new Date();
    const data = JSON.parse(localStorage.SudokuApp);
    data.push({
      level: this.props.level,
      time: this.props.count
    });
    localStorage.SudokuApp = JSON.stringify(data);
  }

  render() {
    return(
      <div className="win">
        <h1>You WIN</h1>
        <NewGame component="panel"
                 reset={this.props.reset}
                 click={this.props.click}
                 solve={this.props.solve}
                 pause={this.props.pause}/>
        <span className="win__time">Time: {this.props.count}</span>
      </div>
    );
  }
}

export default Win;