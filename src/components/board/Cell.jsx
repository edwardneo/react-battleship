import React from 'react';
import Indicator from '../visuals/Indicator'

function Cell(props) {
    return (
        <button
            className='cell'
            style={{
                lineHeight: props.unit,
                height: props.unit,
                width: props.unit,
            }}
            onClick={props.onClick}
        >
        {
            props.value ?
            <Indicator hit={props.value === 'H'} /> :
            null
        }
        </button>
    )
}

export default Cell;