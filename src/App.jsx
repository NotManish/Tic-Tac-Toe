import { createContext, useState } from "react";
import Board from "./components/Board"
import TicTacToe from "./components/TicTacToe";
import './index.css';

export const myContext = createContext();

function App() {
  const player_X = "X";
  const player_O = "O";
  const [tiles, setTiles] = useState(["", "", "", "", "", "", "", "", ""]);
  const [playerTurn, setPlayerTurn] = useState(player_X);

  return (
    <myContext.Provider value={{ tiles, setTiles, playerTurn, setPlayerTurn, player_O, player_X }}>
      <TicTacToe />
      <Board />
    </myContext.Provider>
  )
}

export default App
