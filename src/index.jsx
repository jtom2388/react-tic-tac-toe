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

  return (
    <div className='container'>
      <div className='game'>
        <div className='board'>
          <div className='row'>
            <Square value={0} onClick={null}/>
            <Square value={1} onClick={null}/>
            <Square value={2} onClick={null}/>
          </div>
          <div className='row'>
            <Square value={3} onClick={null}/>
            <Square value={4} onClick={null}/>
            <Square value={5} onClick={null}/>
          </div>
          <div className='row'>
            <Square value={6} onClick={null}/>
            <Square value={7} onClick={null}/>
            <Square value={8} onClick={null}/>
          </div>
        </div>
      </div>
    </div>
  )
}

ReactDOM.render(<Game />, document.getElementById('root'));