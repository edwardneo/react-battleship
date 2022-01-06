import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Game from './Game';
import '../stylesheets/index.css';

export default function App({ unit }) {
    return (
        <DndProvider backend={HTML5Backend}>
            <div>
                <h1 className='title'>BATTLESHIP</h1>
                <Game
                    unit={unit}
                />
            </div>
        </DndProvider>
    );
}