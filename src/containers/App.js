import React, {Component} from 'react';
import sudoku from 'sudoku-umd';
import '../app.sass';

import Header from './Header';
import Board from './Board';
import Panel from './Panel';
import Win from './Win';
import Stats from './Stats';

class App extends Component {
  constructor() {
    super();
    this.state= {
      template: "",
      solution: "",
      board: "",
      //counter states
      enabled: false,
      timeout: 1000,
      count: 0,
      level: ''
    }
    this.getTemplate = this.getTemplate.bind(this);
    this.changeSum= this.changeSum.bind(this);
    this.solve= this.solve.bind(this);
    this.reset= this.reset.bind(this);
    this.pause= this.pause.bind(this);
    this.count= this.count.bind(this);
  }
  componentDidMount() {
    if(!localStorage.SudokuApp) {
      localStorage.SudokuApp = "[]"
    }
  }
  // Set up new sudoku board
  getTemplate(event) {
    const level = event.target.nextElementSibling.value;
    this.setState({level})
    const board = sudoku.generate(level); // Change difficulty level '< 81'
    const solution = sudoku.solve(board);
    this.setState({
      template: board,
      board: board,
      solution: solution
    });
  }
  // Change player board values string
  changeSum(val) {
    console.log(val)
    const value = val.value || '.'
    if(/[1-9]/.test(value) || /\./.test(value)) {
      this.setState({
        board: this.state.board.substr(0, val.id) + value + this.state.board.substr(Number(val.id) + 1)
      });
    }
  }
  // Display solution
  solve() {
    this.setState({
      template: this.state.solution
    });
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
    return this.gamePlay()
  }

  gamePlay() {
    // Display Win modal when player wins
    if(this.state.board === this.state.solution && this.state.board) {

      return(
        <Win click={this.getTemplate}
             count={this.state.count}
             reset={this.reset}
             pause={this.pause}
             level={this.state.level}/>
      )
    } else { // Display game board
      return(
        <div className="sudoku">
          <Header />
          <Panel click={this.getTemplate}
                 solve={this.solve}
                 state={this.state}
                 pause={this.pause}
                 reset={this.reset}
                 count={this.count}/>
          <Board template={this.state.template}
                 changeSum={this.changeSum}/>
          <Stats />
        </div>
      )
    }
  }
}


export default App