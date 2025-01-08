import { useContext } from 'react';
import '../index.css';
import Strike from './Strike';
import Tile from './Tile';
import { myContext } from '../App';

function Board() {
  const { tiles } = useContext(myContext);

  return (
    <div className='flex justify-center mt-16'>
      <div className="grid grid-cols-[80px_80px_80px] grid-rows-[80px_80px_80px]">
        {tiles.map((currentTile, index) => {
          let className = '';
          if (index < 6) className += ' border-b-4 border-blue-500';
          if (index % 3 !== 2) className += ' border-r-4 border-blue-500';
          return <Tile key={index} indx={index} className={className} />;
        })}
        <Strike />
      </div>
    </div>

  );
}

export default Board;
