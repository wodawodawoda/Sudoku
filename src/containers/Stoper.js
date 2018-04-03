import React from 'react';
import Counter from './Counter';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: 0,
            run: false,
            record: []
        }
        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
        this.record = this.record.bind(this);
        this.reset = this.reset.bind(this);
        this.updateTime = this.updateTime.bind(this);
    }
    //Callbacks
    start() {
        this.setState({run: true});
    }
    stop() {
        this.setState({run: false});
    }
    record() {
        this.setState({
            record: [this.formatTime(this.state.time), ...this.state.record]
        });
    }
    reset() {
      this.setState({
        time: 0,
        record: []
      });
    }
    getTime(time) {
        this.setState({time: time});
    }
    formatTime(time) {
      const minutes = Math.floor(time / 6000),
        seconds = ((time % 6000) / 100).toFixed(0),
        miliseconds = time % 100;
      return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}:${(miliseconds < 10 ? '0' : '')}${miliseconds}`;
    }
    // Run
    interval() {
        if(!this.state.run) {this.int = setInterval(this.updateTime, 10)}; // runs when new props/state is recived but not yet upadted
    }
    updateTime() {
        this.setState({time: this.state.time + 1});
    }
    // Stop
    stopInterval() {
        clearInterval(this.int);
    }
    componentWillReceiveProps(nextProps) {
      this.setState({
        run: nextProps.run
      });
      if(nextProps.run) {
        this.reset();
        this.interval();
      } else if (!nextProps.run) {
        this.stopInterval();
      }
    }

    render() {
        return(
          <Counter time={this.state.time} run={this.state.run} format={this.formatTime}/>
        );
    }
}

export default App;