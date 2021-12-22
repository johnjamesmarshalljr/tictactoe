import { io } from "socket.io-client";

export function getStatus(winner, squares, nextValue) {
  const socket = io(`http://localhost:3000`);
    if (winner) {
      socket.emit('winner', (squares))
        return `WINNER!!! ${winner}`
    }else if (squares.every(Boolean)) {
      return 'A tie'
    }else {
      return `${nextValue}: You're Up! `
    }
  }
  
 export function getNext(squares) {
    return squares.filter(Boolean).length % 2 === 0 ? 'X' : 'O'
  }
  
 export function getWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ]
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i]
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
          return squares[a]
        }
      }
      return null
  }