import React, {useState, useEffect} from 'react';
import TicTacToe from './TicTacToe'
import "./App.css";
import { io } from "socket.io-client";


// const connectSocket = async () => {
//   const socket = await socketService
//     .connect("http://localhost:9000")
//     .catch((err) => {
//       console.log("Error: ", err);
//     });
// };

// useEffect(() => {
//   connectSocket();
// }, []);

const App = () => {
  const [socket, setSocket] = useState(null);
  
  useEffect(() => {
    const newSocket = io(`http://localhost:3000`);
    setSocket(newSocket);
    return () => newSocket.close();
  }, [setSocket]);

  const gameStarted = () => {
    socket.on("play", (index) => {
      console.log("received index", index)
      this.draw(index, true)
    })
  }


  return <TicTacToe />;
}


export default App;