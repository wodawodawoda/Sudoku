import React, {Component} from 'react';
import Logo from '../sudoku-logo.svg'
class Header extends Component {
  render() {
    return(
      <header className="header">
        <Logo width={300} height={190}/>
      </header>
    )
  }
}

export default Header