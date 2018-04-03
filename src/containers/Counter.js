import React from 'react';

class Counter extends React.Component {
    render() {
        return(
            <div className="counter">
                <span id="counter" className="counter__time">{this.props.format(this.props.time)}</span>
            </div>
        );
    }
}

export default Counter;