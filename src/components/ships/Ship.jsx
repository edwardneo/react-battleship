import React from 'react';
import { useDrag } from 'react-dnd';
import { ItemTypes } from '../constants/ItemTypes';

function Ship({ id, length, unit }) {
    const [{ isDragging, initialOffset }, drag] = useDrag(() => ({
        type: ItemTypes.SHIP,
        item: { id, length },
        collect: (monitor) => ({
            isDragging: ! !monitor.isDragging(),
            initialOffset: (monitor.isDragging() ? monitor.getInitialClientOffset() : null),
        }),
    }));

    // console.log(id + ': ' + (initialOffset ? '[' + initialOffset.x + ', ' + initialOffset.y + ']' : 'null'));

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