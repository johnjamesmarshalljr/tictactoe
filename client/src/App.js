import React from 'react';
import TicTacToe from './TicTacToe'
import "./App.css";
import { io } from "socket.io-client";

const App = () => {
  return <TicTacToe />;
}


export default App;