import { useContext } from "react";
import { myContext } from "../App";

function Reset() {
    const { tiles, setTiles, won, setWon } = useContext(myContext);
    const handleReset = () => {
        setTiles(["", "", "", "", "", "", "", "", ""]);
        setWon(false);
    }
    const hasNonEmptyString = tiles.some(element => element !== "");
    return (

        hasNonEmptyString && <div className="flex justify-center mt-10">
            <button className="border-2 rounded-lg pt-2 pb-2 pr-8 pl-8 bg-blue-500 text-white" onClick={handleReset}>Reset</button>
        </div>

    );
}

export default Reset;