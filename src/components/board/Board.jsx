import React from 'react';
import Cell from './Cell';
import { genShip } from '../ships/Ship';
import { genBody, hasOverlap, comparePos } from '../util/CellUtils';

export default class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            grid: Array(10).fill(Array(10).fill(null)),
            shipPositions: {
                carrier: null,
                battleship: null,
                cruiser: null,
                submarine: null,
                destroyer: null,
            },
        }
    }

    copyState() {
        return JSON.parse(JSON.stringify(this.state));
    }

    handleCellDrop(row, col, shipID) {
        const { grid: newGrid, shipPositions: newShipPositions } = this.copyState();
        const shipPos = { 'head': [row, col], 'body': genBody(row, col, shipID.length) };

        newGrid[row][col] = shipID;
        newShipPositions[shipID.name] = newShipPositions[shipID.name] ? { 'old': newShipPositions[shipID.name], 'new': shipPos } : shipPos;

        this.setState({
            grid: newGrid,
            shipPositions: newShipPositions,
        });

        return { name: 'cell', pos: [row, col] };
    }

    handleShipDrop(shipID) {
        const { grid: newGrid, shipPositions: newShipPositions } = this.copyState();
        const [oldRow, oldCol] = newShipPositions[shipID.name].head || newShipPositions[shipID.name].old.head;

        newGrid[oldRow][oldCol] = null;
        newShipPositions[shipID.name] = newShipPositions[shipID.name].new;

        this.setState({
            grid: newGrid,
            shipPositions: newShipPositions,
        });
    }

    handleCanDrop(row, col, shipID) {
        // Drop target with same position
        if (this.state.shipPositions[shipID.name] && comparePos([row, col], this.state.shipPositions[shipID.name].head)) return false;

        // Within bounds of grid
        if (row + shipID.length - 1 >= 10) return false;

        // Overlaps with other existing ships
        const possibleShip = genBody(row, col, shipID.length);
        const occupiedCells = [];
        for (const shipName in this.state.shipPositions) {
            if (shipName !== shipID.name && this.state.shipPositions[shipName]) {
                occupiedCells.push(...this.state.shipPositions[shipName].body);
            }
        }
        
        return !hasOverlap(possibleShip, occupiedCells);
    }

    renderCell(row, col) {
        return (<Cell
                    key={[row, col]}
                    pos={[row, col]}
                    unit={this.props.unit}
                    onCellDrop={shipID => this.handleCellDrop(row, col, shipID)}
                    canDrop={shipID => this.handleCanDrop(row, col, shipID)}
                >
                    {genShip(this.state.grid[row][col], this.props.unit, shipID => this.handleShipDrop(shipID))}
                </Cell>
        );
    }

    render() {
        const cells = [];
        for (let row=0; row<10; row++) {
            for (let col=0; col<10; col++) {
                cells.push(this.renderCell(row, col));
            }
        }

        return (
            <div
                className='board'
                style={{ height: this.props.unit * 10 + 11, width: this.props.unit * 10 + 11}}
            >
                {cells}
            </div>
        )
    }
}