import React from 'react';

function Indicator(props) {
    return (
        <span
            className='indicator'
            style={{backgroundColor: (props.hit ? 'rgb(255, 0, 0)' : 'rgb(255, 192, 121)')}}
        />
    )
}

export default Indicator;