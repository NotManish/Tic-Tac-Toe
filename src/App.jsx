import { createContext, useState } from "react";
import Board from "./components/Board"
import TicTacToe from "./components/TicTacToe";
import './index.css';
import Reset from "./components/Reset";
import ShowWinner from "./components/ShowWinner";

export const myContext = createContext();

function App() {
  const player_X = "X";
  const player_O = "O";
  const [tiles, setTiles] = useState(["", "", "", "", "", "", "", "", ""]);
  const [playerTurn, setPlayerTurn] = useState(player_X);
  const [won, setWon] = useState(false);
  const [start, setStart] = useState(false);
  const [draw, setDraw] = useState(false);
  let previousPlayerTurn = null;
  playerTurn === player_X ? previousPlayerTurn = player_O : previousPlayerTurn = player_X;

  return (
    <myContext.Provider value={{ tiles, setTiles, playerTurn, setPlayerTurn, player_O, player_X, won, setWon, previousPlayerTurn, start, setStart, draw, setDraw }}>
      <TicTacToe />
      <Board />
      <ShowWinner />
      <Reset />
    </myContext.Provider>
  )
}

export default App
