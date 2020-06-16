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
  let nextTurn = isPlayerX ? 'X' : 'O'
  let winner = win(squares);

  function renderSquare(n) {
    return <Square 
      value={squares[n]} 
      onClick={() => {
        if(squares[n] !== null || winner !== null) {
          return;
        }
        let markSquares = squares.slice();
        markSquares[n] = nextTurn;
        setSquares(markSquares);
        setIsPlayerX(!isPlayerX)
      }} 
    />;
  }

  function gameStatus() {
    if(winner) {
      return winner + " wins!";
    } else if (isBoardFull(squares)) {
      return "Tie game";
    } else {
      return (nextTurn) + "'s turn";
    }
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
        <div className='game-info'>{gameStatus()}</div>
      </div>
    </div>
  )
}

ReactDOM.render(<Game />, document.getElementById('root'));

function win(squares) {
  let threeInARow = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for(let i = 0; i < threeInARow.length; i++) {
    let [a, b, c] = threeInARow[i];
    if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}

function isBoardFull(squares) {
  for(let i = 0; i < squares.length; i++) {
    if(squares[i] === null) {
      return false;
    }
  }
  return true;
}