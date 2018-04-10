import React, {Component} from 'react';
import ReactInterval from 'react-interval';
import NewGame from './NewGame'



class Panel extends Component {
  constructor (props) {
    super(props);

  }

  render() {
    const {timeout, enabled, count} = this.props.state;
    return(
      <div className="panel">
         <NewGame component="panel"
                  reset={this.props.reset}
                  click={this.props.click}
                  solve={this.props.solve}
                  pause={this.props.pause}/>
         <ReactInterval {...{timeout, enabled}}
                        callback={() => this.props.count()} /> {/*Timer*/}
         <div className="panel__timer">Time: {count}</div>
      </div>
    );
  }
}

export default Panel