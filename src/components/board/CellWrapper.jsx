import React from 'react';
import { useDrop } from 'react-dnd';
import Cell from './Cell';
import { ItemTypes } from '../constants/ItemTypes'

function CellWrapper({ value, position, borderWidth, containsShip, unit, onClick, children }) {
    const [, drop] = useDrop(() => ({
        accept: ItemTypes.SHIP,
    }));

    return (
        <Cell
            value={value}
            position={position}
            rightBorder={borderWidth}
            containsShip={containsShip}
            unit={unit}
            onClick={onClick}
            ref={drop}
        >
            {children}
        </Cell>
    );
}

export default CellWrapper;