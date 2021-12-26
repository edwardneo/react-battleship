import React from 'react';
import Ship from './Ship';

function Dock(props) {
    return (
        <div
            className='dock'
            style={{
                width: props.unit * (3 + 1) + 6,
                borderRadius: props.unit / 5,
            }}
        >
            <div className='port'>
                <Ship length={5} unit={props.unit} />
            </div>
            <div className='port'>
                <Ship length={4} unit={props.unit} />
                <div className='divider' style={{ height: props.unit }} />
                <Ship length={2} unit={props.unit} />
            </div>
            <div className='port'>
                <Ship length={3} unit={props.unit} />
                <div className='divider' style={{ height: props.unit }} />
                <Ship length={3} unit={props.unit} />
            </div>
        </div>
    )
}

export default Dock;