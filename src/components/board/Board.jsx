import React, { useState } from 'react';
import CellWrapper from './CellWrapper';
import Ship from '../ships/Ship';

function Board({ type, unit }) {
    const [grid, setGrid] = useState(Array(10).fill(Array(10).fill(null)));

    function handleClick(r, c) {
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

    function shipPresent(r, c) {
        return false;
    }

    function renderShip(r, c) {
        if (shipPresent(r, c)) {
            return (
                <Ship length={2} unit={unit} />
            );
        } else {
            return null;
        }
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
                                        <CellWrapper
                                            value={grid[r][c]}
                                            position={[r, c]}
                                            borderWidth={'1px ' + (c === 9 ? '1px ' : '0px ') + (r === 9 ? '1px ' : '0px ') + '1px'}
                                            containsShip={shipPresent(r, c)}
                                            unit={unit}
                                            onClick={() => handleClick(r, c)}
                                        >
                                            {renderShip(r, c)}
                                        </CellWrapper>
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