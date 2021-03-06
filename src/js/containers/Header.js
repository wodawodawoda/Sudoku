import React, {Component} from 'react';
import Logo from '../../assets/sudoku-logo.svg';
import '../../styles/header.sass';

class Header extends Component {
  render() {
    return(
      <header className="sudoku__header">
        <Logo width={300} height={190}/>
      </header>
    );
  }
}

export default Header;