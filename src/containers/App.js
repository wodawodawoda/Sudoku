import React, {Component} from 'react';
import sudoku from 'sudoku-umd';
import '../app.sass';

import Header from './Header'
import Board from './Board'
import Panel from './Panel'
import Win from './Win'


class App extends Component {
  constructor() {
    super();
    this.state= {
      template: "",
      solution: "",
      board: "",
      run: false,
      win: false,
      al: ''
    }
    this.getTemplate = this.getTemplate.bind(this);
    // this.getTime = this.getTime.bind(this);
    this.changeSum= this.changeSum.bind(this);
    this.solve= this.solve.bind(this);
  }
  getTemplate(event) {
    const level = event.target.nextElementSibling.value;
    const board = sudoku.generate(level);
    const solution = sudoku.solve(board);
    // const arr = [...template]
    // let sum = 0;
    // for(let i = 0; i < arr.length; i++) {
    //   if(arr[i] !== '.') sum += Number(arr[i])
    // }
    this.setState({
      template: board,
      board: board,
      solution: solution,
      run: true
    })
  }
  changeSum(val) {
    const value = val.value || '.'
    if(/[1-9]/.test(value) || /\./.test(value)) {
      this.setState({
        board: this.state.board.substr(0, val.id) + value + this.state.board.substr(Number(val.id) + 1)
      })
    }
    if(this.state.run) {this.timer = setInterval(() => this.setState({time: time + 1}), 1000)}
  }

  // getTime(time) {
  //   console.log(time) // "this.setState is not a function???"
  // }
  solve() {
    this.setState({
      template: this.state.solution,
      run: false
    })
  }
  render() {
    return(
      <div className="sudoku">
        <Header />
        <Panel click={this.getTemplate} solve={this.solve} run={this.state.run}/>
        <Board template={this.state.template} changeSum={this.changeSum}/>
        {this.state.win && <Win click={this.getTemplate} time={this.props.time}/>}
      </div>


    )
  }
}

export default App