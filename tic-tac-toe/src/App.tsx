import React, { useState } from 'react';
import './App.css';
import Block from './components/Block';

function App() {

  const [state, setState] = useState(Array(9).fill(null));
  const [currentTurn, setCurrentTurn] = useState<string>('X');

  const IsWinning = (state: any[]) => {
    const win = [
      [0,1,2],
      [0,3,6],
      [2,5,8],
      [6,7,8],
      [3,4,5],
      [2,4,6],
      [0,4,8]
    ];

    for(let i=0;i<win.length;i++)
    {
      let [a,b,c] = win[i];
      if(state[a] != null && state[a] === state[b] && state[a] === state[c])
        return true;
    }

    return false;
  }

  const HandleBlockClick = (index : number) => {
    const stateCopy = Array.from(state);

    const win = IsWinning(stateCopy);

    if(stateCopy[index] === null)
      stateCopy[index] = currentTurn;

    if(win)
    {
      alert(`${currentTurn} won the game`);
      return;
    }

    setCurrentTurn(currentTurn === 'X' ? 'O' : 'X')
    setState(stateCopy)
  }

  return (
    <div className='board'>
      <div className='row'>
        <Block onClick={() => HandleBlockClick(0)} value={state[0]} />
        <Block onClick={() => HandleBlockClick(1)} value={state[1]}/>
        <Block onClick={() => HandleBlockClick(2)} value={state[2]}/>
      </div>
      <div className='row'>
        <Block onClick={() => HandleBlockClick(3)} value={state[3]}/>
        <Block onClick={() => HandleBlockClick(4)} value={state[4]}/>
        <Block onClick={() => HandleBlockClick(5)} value={state[5]}/>
      </div>
      <div className='row'>
        <Block onClick={() => HandleBlockClick(6)} value={state[6]}/>
        <Block onClick={() => HandleBlockClick(7)} value={state[7]}/>
        <Block onClick={() => HandleBlockClick(8)} value={state[8]}/>
      </div>
    </div>
  );
}

export default App;
