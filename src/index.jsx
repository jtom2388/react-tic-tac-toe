import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square({ value, onClick }) {

  return (
    <button className='square' onClick={onClick}>
      {value}
    </button>
  );
}

function Game() {

  let [ squares, setSquares ] = useState(Array(9).fill(null));
  let [ isPlayerX, setIsPlayerX ] = useState(true);

  function renderSquare(n) {
    return <Square 
      value={squares[n]} 
      onClick={() => {
        let markSquares = squares.slice();
        markSquares[n] = isPlayerX ? 'X' : 'O';
        setSquares(markSquares);
        setIsPlayerX(!isPlayerX)
      }} 
    />;
  }

  return (
    <div className='container'>
      <div className='game'>
        <div className='board'>
          <div className='row'>
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
          </div>
          <div className='row'>
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
          </div>
          <div className='row'>
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
          </div>
        </div>
      </div>
    </div>
  )
}

ReactDOM.render(<Game />, document.getElementById('root'));