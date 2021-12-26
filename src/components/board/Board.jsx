import React, { useState } from 'react';
import Cell from './Cell'

function Board(props) {
    const [grid, setGrid] = useState(Array(10).fill(Array(10).fill(null)));

    function handleClick(r, c) {
        const type = props.type;
        switch (type) {
            case 'position':
                break;
            case 'target':
                fire(r, c);
                break;
            default:
                break;
        }
    }

    function fire(r, c) {
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
                                            type={props.type}
                                            value={grid[r][c]}
                                            unit={props.unit}
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

export default Board;