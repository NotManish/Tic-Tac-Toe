
import { useContext, useEffect } from "react";
import { myContext } from "../App";

function ShowWinner() {
    const { tiles, won, setWon, previousPlayerTurn } = useContext(myContext);
    useEffect(() => {
        if (tiles[0] == tiles[1] && tiles[1] == tiles[2] && tiles[2] !== "") {
            setWon(true);
        }
        if (tiles[3] == tiles[4] && tiles[4] == tiles[5] && tiles[5] !== "") {
            setWon(true);
        }
        if (tiles[6] == tiles[7] && tiles[7] == tiles[8] && tiles[8] !== "") {
            setWon(true);
        }
        if (tiles[0] == tiles[3] && tiles[3] == tiles[6] && tiles[6] !== "") {
            setWon(true);
        }
        if (tiles[1] == tiles[4] && tiles[4] == tiles[7] && tiles[7] !== "") {
            setWon(true);
        }
        if (tiles[2] == tiles[5] && tiles[5] == tiles[8] && tiles[8] !== "") {
            setWon(true);
        }
        if (tiles[0] == tiles[4] && tiles[4] == tiles[8] && tiles[8] !== "") {
            setWon(true);
        }
        if (tiles[2] == tiles[4] && tiles[4] == tiles[6] && tiles[6] !== "") {
            setWon(true);
        }
    }, [tiles])
    return (
        <div className="flex justify-center text-xl mt-10 font-bold text-red-600">
            {won && <p>Congratulations, {previousPlayerTurn} won the game.</p>}
        </div>
    );
}

export default ShowWinner;