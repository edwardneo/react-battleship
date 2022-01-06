import React from "react";
import Board from "./board/Board";
import Dock from "./ships/Dock";

export default function Game({ unit }) {
    return (
        <div className='game'>
            <div className='game-board'>
                <Board
                    unit={unit}
                />
            </div>
            <Dock
                unit={unit}
            />
        </div>
    );
}