import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../constants/ItemTypes'
import Ship from '../ships/Ship';

function renderShip(item, unit) {
    if (item) {
        return (
            <Ship
                id={item.id}
                length={item.length}
                unit={unit}
            />
        )
    } else {
        return null;
    }
}

function CellTarget({ position, unit }) {
    const [ship, setShip] = useState(null);
    const [, drop] = useDrop(() => ({
        accept: ItemTypes.SHIP,
        drop: (item) => { setShip(item, unit) },
    }));

    return (
        <div
            className='cell-target'
            ref={drop}
        >
            {renderShip(ship, unit)}
        </div>
    );
}

export default CellTarget;