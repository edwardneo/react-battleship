import React from 'react';
import { useDrag } from 'react-dnd';
import { ItemTypes } from '../constants/ItemTypes';

function Ship({ length, unit }) {
    const [{isDragging}, drag] = useDrag(() => ({
        type: ItemTypes.SHIP,
        collect: (monitor) => ({
            isDragging: ! !monitor.isDragging()
        }),
    }));

    return (
        <div
            className='ship'
            ref={drag}
            style={{
                width: unit,
                height: unit * length + (length - 1),
            }}
        />
    )
}

export default Ship;