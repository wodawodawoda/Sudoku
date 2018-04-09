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
      //counter state
      enabled: false,
      timeout: 1000,
      count: 0
    }
    this.getTemplate = this.getTemplate.bind(this);
    this.changeSum= this.changeSum.bind(this);
    this.solve= this.solve.bind(this);
    this.reset= this.reset.bind(this);
    this.pause= this.pause.bind(this);
    this.count= this.count.bind(this);
  }
  getTemplate(event) {
    const level = event.target.nextElementSibling.value;
    const board = sudoku.generate(level);
    const solution = sudoku.solve(board);
    this.setState({
      template: board,
      board: board,
      solution: solution
    });
  }
  changeSum(val) {
    const value = val.value || '.'
    if(/[1-9]/.test(value) || /\./.test(value)) {
      this.setState({
        board: this.state.board.substr(0, val.id) + value + this.state.board.substr(Number(val.id) + 1)
      });
    }
    console.log(this.state.board, val.id)
  }
  solve() {
    this.setState({
      template: this.state.solution
    });
  }
  win() {
    if(this.state.board === this.state.solution && this.state.board) {
      // I wanted to to change state 'run' to false to trigger function in Panel.
      // I'm getting error "Maximum update depth exceeded".
      // Is this happening because state should be in parent component?
      // this.setState({run: true});
      return(
        <Win click={this.getTemplate} time={this.props.time}/>
      )
    }
  }
  // Counter functions
  reset() {
    this.setState({enabled: true, count: 0});
  }
  pause() {
    this.setState({enabled: false})
  }
  count() {
    this.setState({count: this.state.count + 1})
  }
  render() {
    return(
      <div className="sudoku">
        <Header />
        <Panel click={this.getTemplate} solve={this.solve} state={this.state} pause={this.pause} reset={this.reset} count={this.count}/>
        <Board template={this.state.template} changeSum={this.changeSum}/>
        {this.win()} {/*TODO: Remove iniline if statement*/}
      </div>
    )
  }
}

export default App