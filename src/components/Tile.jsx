import '../index.css';
import { myContext } from '../App';
import { useContext, useState, won } from 'react';

function Tile({ indx, className }) {
    const { tiles, setTiles, player_O, player_X, playerTurn, setPlayerTurn, won, start } = useContext(myContext);

    const [isHovered, setIsHovered] = useState(false);

    const handleTileClick = (indx) => {
        if (won == false && start == true) {
            if (tiles[indx] === "") {
                tiles[indx] = playerTurn;
                setTiles(tiles.map((element, index) => {
                    if (index === indx) {
                        return tiles[indx];
                    } else {
                        return element;
                    }
                }));

                if (playerTurn === player_X) {
                    setPlayerTurn(player_O);
                } else {
                    setPlayerTurn(player_X);
                }
            }
        }
    };

    return (
        <div
            className={`flex items-center justify-center ${className} text-4xl cursor-pointer relative`}
            onClick={() => handleTileClick(indx)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {tiles[indx]}
            {isHovered && tiles[indx] === "" && (
                <div className="text-3xl opacity-5">
                    {playerTurn}
                </div>
            )}
        </div>
    );
}

export default Tile;
