import React from 'react';

function Cell({ value, position, borderWidth, containsShip, unit, onClick, children }) {
    const style = {
        height: unit,
        width: unit,
        borderWidth: {borderWidth},
    }

    if (containsShip) {
        style.zIndex = 0;
        style.position = 'relative';
    }

    return (
        <button
            className='cell'
            style={style}
            onClick={onClick}
        >
        {
            children
        }
        </button>
    )
}

export default Cell;