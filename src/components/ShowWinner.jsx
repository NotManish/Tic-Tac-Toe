
import { useContext, useEffect } from "react";
import { myContext } from "../App";

function ShowWinner() {
    const { tiles, won, setWon, previousPlayerTurn, playerTurn, start, draw, setDraw, SetStrikePosition } = useContext(myContext);
    let { srtikePosition } = useContext(myContext);
    useEffect(() => {
        if (tiles[0] == tiles[1] && tiles[1] == tiles[2] && tiles[2] !== "") {
            setWon(true);
            SetStrikePosition("-translate-y-[200px]  col-span-3");
        }
        if (tiles[3] == tiles[4] && tiles[4] == tiles[5] && tiles[5] !== "") {
            setWon(true);
            SetStrikePosition("-translate-y-[120px]  col-span-3");

        }
        if (tiles[6] == tiles[7] && tiles[7] == tiles[8] && tiles[8] !== "") {
            setWon(true);
            SetStrikePosition("-translate-y-[40px]  col-span-3");

        }
        if (tiles[0] == tiles[3] && tiles[3] == tiles[6] && tiles[6] !== "") {
            setWon(true);
            SetStrikePosition(" col-span-3 origin-[40px_0px] -translate-y-[40px] -rotate-90");


        }
        if (tiles[1] == tiles[4] && tiles[4] == tiles[7] && tiles[7] !== "") {
            setWon(true);
            SetStrikePosition(" col-span-3 -translate-y-[120px] -rotate-90");

        }
        if (tiles[2] == tiles[5] && tiles[5] == tiles[8] && tiles[8] !== "") {
            setWon(true);
            SetStrikePosition(" col-span-3 -translate-y-[40px] origin-[200px_0px] rotate-90");

        }
        if (tiles[0] == tiles[4] && tiles[4] == tiles[8] && tiles[8] !== "") {
            setWon(true);
            SetStrikePosition("-translate-y-[120px]  col-span-3 rotate-45");

        }
        if (tiles[2] == tiles[4] && tiles[4] == tiles[6] && tiles[6] !== "") {
            setWon(true);
            SetStrikePosition("-translate-y-[120px]  col-span-3 -rotate-45");

        }

        checkDraw();

    }, [tiles])

    const checkDraw = () => {
        if (!tiles.includes("")) {
            setDraw(true);
        }
    };

    return (
        start == true && <div className="flex justify-center text-xl mt-10 font-bold text-red-600">
            {won ? <p>Congratulations, {previousPlayerTurn} won the game.</p> : draw ? <p>Game was draw.</p> : <p>Player "{playerTurn}", place your move.</p>}
        </div>
    );
}

export default ShowWinner;