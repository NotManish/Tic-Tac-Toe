import { useContext } from "react";
import { myContext } from "../App";
function Strike() {
    const { srtikePosition, setStrikePosition } = useContext(myContext);
    return (
        srtikePosition && <div className={`border-2 border-red-400 ${srtikePosition}`}>

        </div>
    );
}

export default Strike;