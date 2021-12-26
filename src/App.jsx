import React from 'react';
import Board from './components/board/Board';
import Dock from './components/ships/Dock';
import './stylesheets/index.css';

function App(props) {
    return (
        <div>
            <h1 className='title'>BATTLESHIP</h1>
            <div className='game'>
                <div className='game-board'>
                    <Board
                        type='position'
                        unit={props.unit}
                    />
                </div>
                <Dock
                    unit={props.unit}
                />
            </div>
        </div>
    );
}

export default App;