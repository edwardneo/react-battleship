import React from 'react';
import Ship from './Ship';

function Dock({ unit }) {
    return (
        <div
            className='dock'
            style={{
                width: unit * (3 + 1) + 6,
                borderRadius: unit / 5,
            }}
        >
            <div className='port'>
                <Ship length={5} unit={unit} />
            </div>
            <div className='port'>
                <Ship length={4} unit={unit} />
                <div className='divider' style={{ height: unit }} />
                <Ship length={2} unit={unit} />
            </div>
            <div className='port'>
                <Ship length={3} unit={unit} />
                <div className='divider' style={{ height: unit }} />
                <Ship length={3} unit={unit} />
            </div>
        </div>
    )
}

export default Dock;