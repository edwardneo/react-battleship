import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Indicator(props) {
    return (
        <span className={props.hit ? 'indicator-hit' : 'indicator-miss'} />
    )
}

function Cell(props) {
    return (
        <button
            className='cell'
            onClick={props.onClick}
        >
        {
            props.value ?
            <Indicator hit={props.value === 'H'} /> :
            null
        }
        </button>
    )
}

function Board(props) {
    const [grid, setGrid] = useState(Array(10).fill(Array(10).fill(null)));

    function handleClick(r, c) {
        const newGrid = grid.map((row) => row.slice());
        newGrid[r][c] = 'M'
        setGrid(newGrid)
    }

    return (
        <div>
            {grid.map(
                (row, r) => {
                    return (
                        <div className='board-row'>
                            {row.map(
                                (col, c) => {
                                    return (
                                        <Cell
                                            value={grid[r][c]}
                                            onClick={() => handleClick(r, c)}
                                        />
                                    )
                                }
                            )}
                        </div>
                    );
                }
            )}
        </div>
    )
}

function Game(props) {
    return (
        <div className='game'>
            <div className='game-board'>
                <Board />
            </div>
        </div>
    );
}

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);