import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Board from './components/board/Board';
import Dock from './components/ships/Dock';
import './stylesheets/index.css';

function App({ unit }) {
    return (
        <DndProvider backend={HTML5Backend}>
            <div>
                <h1 className='title'>BATTLESHIP</h1>
                <div className='game'>
                    <div className='game-board'>
                        <Board
                            type='position'
                            unit={unit}
                        />
                    </div>
                    <Dock
                        unit={unit}
                    />
                </div>
            </div>
        </DndProvider>
    );
}

export default App;