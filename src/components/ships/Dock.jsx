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
                <Ship id='carrier' length={5} unit={unit} />
            </div>
            <div className='port'>
                <Ship id='battleship' length={4} unit={unit} />
                <div className='divider' style={{ height: unit }} />
                <Ship id='destroyer' length={2} unit={unit} />
            </div>
            <div className='port'>
                <Ship id='cruiser' length={3} unit={unit} />
                <div className='divider' style={{ height: unit }} />
                <Ship id='submarine' length={3} unit={unit} />
            </div>
        </div>
    )
}

export default Dock;