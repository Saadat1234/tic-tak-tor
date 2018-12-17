import React, { Component } from 'react';
import Square from './Square';

class Board extends Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }
  render(){
    return (
    <div className="game-board">
      {this.state.squares(3,3)}
    </div>
  );
  }
}
export default Board;
