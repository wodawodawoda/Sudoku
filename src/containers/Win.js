import React, {Component} from 'react';

class Win extends Component {
  render() {
    return(
      <div className="win">
        <h1>You WIN</h1>
        <button className="win__btn" onClick={this.props.click}>new game</button>
      </div>
    );
  }
}

export default Win