import '../index.css'
import { myContext } from '../App';
import { useContext } from 'react';

function Tile({ indx, className }) {

    const { tiles, setTiles, player_O, player_X, playerTurn, setPlayerTurn } = useContext(myContext);
    const handleTileClick = (indx) => {
        if (tiles[indx] == "") {
            tiles[indx] = playerTurn;
            setTiles(tiles.map((element, index) => {
                if (index == indx) {
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
    
    return (
        <div className={`flex items-center justify-center ${className} text-4xl`} onClick={() => handleTileClick(indx)}>
            {tiles[indx]}
        </div>
    );
}

export default Tile;

