import React, {Component} from 'react';

class Header extends Component {
  render() {
    return(
      <header className="header">
        <h1 className="header__name">sudoku</h1>
        <p className="header__text">Simple sudoku game, have fun!</p>
      </header>
    )
  }
}

export default Header