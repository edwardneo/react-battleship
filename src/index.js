import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Indicator(props) {
    return (
        <span
            className='indicator'
            style={{backgroundColor: (props.hit ? 'rgb(255, 0, 0)' : 'rgb(255, 192, 121)')}}
        />
    )
}

function Cell(props) {
    const unit = props.unit + 'px'

    return (
        <button
            className='cell'
            style={{
                lineHeight: unit,
                height: unit,
                width: unit,
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

function Board(props) {
    const [grid, setGrid] = useState(Array(10).fill(Array(10).fill(null)));

    function handleClick(r, c) {
        const type = props.type;
        switch (type) {
            case 'position':
                break;
            case 'target':
                fire(r, c);
                break;
            default:
                break;
        }
    }

    function fire(r, c) {
        const newGrid = grid.map((row) => row.slice());
        newGrid[r][c] = 'M'
        setGrid(newGrid)
    }

    return (
        <div>
            {grid.map(
                (row, r) => {
                    return (
                        <div className='board-row'>
                            {row.map(
                                (col, c) => {
                                    return (
                                        <Cell
                                            type={props.type}
                                            value={grid[r][c]}
                                            unit={props.unit}
                                            onClick={() => handleClick(r, c)}
                                        />
                                    )
                                }
                            )}
                        </div>
                    );
                }
            )}
        </div>
    )
}

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

function Game(props) {
    return (
        <div>
            <h1 className='title'>BATTLESHIP</h1>
            <div className='game'>
                <div className='game-board'>
                    <Board
                        type='position'
                        unit={props.unit}
                    />
                </div>
                <Dock
                    unit={props.unit}
                />
            </div>
        </div>
    );
}

ReactDOM.render(
    <Game
        unit={34}
    />,
    document.getElementById('root')
);