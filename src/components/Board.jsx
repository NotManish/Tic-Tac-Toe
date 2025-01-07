import { useContext } from 'react';
import '../index.css';
import Strike from './Strike';
import Tile from './Tile';
import { myContext } from '../App';

function Board() {
  const { tiles } = useContext(myContext);

  return (
    <div className='flex justify-center mt-16'>
      <div className="grid grid-cols-[80px_80px_80px] grid-rows-[80px_80px_80px] sm:grid-cols-[90px_90px_90px] sm:grid-rows-[90px_90px_90px] md:grid-cols-[100px_100px_100px] md:grid-rows-[100px_100px_100px] lg:grid-cols-[120px_120px_120px] lg:grid-rows-[120px_120px_120px]">
        {tiles.map((currentTile, index) => {
          let className = '';
          if (index < 6) className += ' border-b-2 border-blue-500';
          if (index % 3 !== 2) className += ' border-r-2 border-blue-500';
          return <Tile key={index} indx={index} className={className} />;
        })}
        <Strike />
      </div>
    </div>

  );
}

export default Board;
