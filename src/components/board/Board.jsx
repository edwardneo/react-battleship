import React, { useEffect, useState } from 'react';
import Cell from './Cell';

function renderCell(row, col, unit) {
    return (<Cell
                key={[row, col]}
                position={[row, col]}
                unit={unit}
                borderWidth={borderWidth(row, col)}
            />
    );
}

function borderWidth(row, col) {
    return '1px ' + (col === 9 ? '1px ' : '0px ') + (row === 9 ? '1px ' : '0px ') + '1px';
}

function Board({ type, unit }) {
    const cells = [];
    for (let row=0; row<10; row++) {
        for (let col=0; col<10; col++) {
            cells.push(renderCell(row, col, unit));
        }
    }

    return (
        <div
            className='board'
            style={{ height: unit * 10 + 11, width: unit * 10 + 11}}
        >
            {cells}
        </div>
    )
}

export default Board;