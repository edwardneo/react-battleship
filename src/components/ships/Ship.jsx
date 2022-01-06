import React from 'react';
import { useDrag } from 'react-dnd';
import { ItemTypes } from '../constants/ItemTypes';

export function genShip(shipID, unit, onDrop) {
    if (shipID) {
        return (
            <Ship
                name={shipID.name}
                length={shipID.length}
                unit={unit}
                onDrop={onDrop}
            />
        )
    } else {
        return null;
    }
}

export default function Ship({ name, length, unit, onDrop }) {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.SHIP,
        item: () => {
            return { name, length };
        },
        end: (item, monitor) => {
            if (monitor.didDrop()) {
                onDrop(item);
            }
        },
        collect: (monitor) => ({
            isDragging: ! !monitor.isDragging(),
        }),
    }));

    return (
        <div
            className='ship'
            ref={drag}
            style={{
                width: unit,
                height: unit * length + (length - 1),
                zIndex: isDragging ? 0 : 1,
                backgroundColor: isDragging ? 'transparent' : '#ddd',
            }}
        />
    )
}