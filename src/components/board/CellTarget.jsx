import React from 'react';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../constants/ItemTypes'

export default function CellTarget({ onCellDrop, canDrop, children }) {
    const [, drop] = useDrop(() => ({
        accept: ItemTypes.SHIP,
        drop: onCellDrop,
        canDrop: (item, monitor) => {
            return canDrop(item);
        }
    }));

    return (
        <div
            className='cell-target'
            ref={drop}
        >
            {children}
        </div>
    );
}