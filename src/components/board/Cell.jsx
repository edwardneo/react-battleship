import React from 'react';
import CellTarget from './CellTarget';

function Cell({ position, unit, borderWidth,onDrop}) {
    const style = {
        borderWidth: borderWidth,
        height: unit,
        width: unit,
    }

    return (
        <div
            className='cell'
            style={style}
        >
            <CellTarget
                position={position}
                unit={unit}
            />
        </div>
    )
}

export default Cell;