import React, {useState, useEffect} from 'react';
import * as utils from './utils'
import { io } from "socket.io-client";

const Board = () => { 
  const socket = io(`http://localhost:3000`);

  socket.on('connect', () => {
    socket.emit('gameBoard', squares)
    socket.emit('custom-event', 10, "Hi", {a: 'a'})
})

useEffect(() => {
  socket.emit('gameBoard', squares)
  // socket.on('get-squares', (squaresObj) => {
  //   setSquares(squaresObj)
  // })
  
}, []);

    const [squares, setSquares] = useState([...Array(9)]);
  
    const nextValue = utils.getNext(squares)
    const winner = utils.getWinner(squares)
    const status = utils.getStatus(winner, squares, nextValue)
  
    function selectSquare(square) {
      if (winner || squares[square]) {
        return
      }
      const spreadSquares = [...squares]
      spreadSquares[square] = nextValue
      setSquares(spreadSquares)
    }
  
    const clearAndRestart = () => {
      setSquares(Array(9).fill(null))
    }
  
    function renderSquare(i) {
      return (
        <button className="square" onClick={() => selectSquare(i)}>
          {squares[i]}
        </button>
      )
    }
  
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
        <button className="restart" onClick={clearAndRestart}>
          restart
        </button>
      </div>
    )
  }

  export default Board;