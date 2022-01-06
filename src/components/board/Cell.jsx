import React from 'react';
import CellTarget from './CellTarget';
import { genBorderWidth } from '../util/CellUtils';

export default function Cell({ pos, unit, onCellDrop, canDrop, children }) {
    const style = {
        borderWidth: genBorderWidth(pos),
        height: unit,
        width: unit,
    }

    return (
        <div
            className='cell'
            style={style}
        >
            <CellTarget
                onCellDrop={onCellDrop}
                canDrop={canDrop}
            >
                {children}
            </CellTarget>
        </div>
    )
}