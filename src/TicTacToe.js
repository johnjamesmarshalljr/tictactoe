import React from 'react';
import Board from './Board'

const TicTacToe = () => {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
    </div>
    )
  }

  export default TicTacToe;