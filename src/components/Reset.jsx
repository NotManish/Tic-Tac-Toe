import { useContext, useRef } from "react";
import { myContext } from "../App";

function Reset() {
    const { tiles, setTiles, won, setWon, start, setStart, setDraw, draw } = useContext(myContext);
    const buttonRef = useRef(null);

    const handleReset = () => {
        setTiles(["", "", "", "", "", "", "", "", ""]);
        setWon(false);
        setDraw(false);
    }
    const handleStart = () => {
        setStart(true);
    }
    const hasNonEmptyString = tiles.some(element => element !== "");
    return (


        !hasNonEmptyString && start == false ? <div className="flex justify-center mt-10">
            <button ref={buttonRef} className="border-2 rounded-lg pt-2 pb-2 pr-8 pl-8 bg-blue-500 text-white" onClick={handleStart}>
                Start
            </button>
        </div> : hasNonEmptyString && <div className="flex justify-center mt-10">
            <button ref={buttonRef} className="border-2 rounded-lg pt-2 pb-2 pr-8 pl-8 bg-blue-500 text-white" onClick={handleReset}>
                {
                    won || draw ? "Play Again" : "Reset"

                }
            </button>
        </div>

    );
}

export default Reset;