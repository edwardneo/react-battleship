import React from 'react';

function Ship(props) {
    return (
        <div
            className='ship'
            style={{
                width: props.unit,
                height: props.unit * props.length,
            }}
        />
    )
}

export default Ship;