import React from 'react';
import DockTarget from './DockTarget';
import { genShip } from './Ship';

export default class Dock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shipsDocked: [
                { name: 'carrier', length: 5, },
                { name: 'battleship', length: 4, },
                { name: 'cruiser', length: 3 },
                { name: 'submarine', length: 3, },
                { name: 'destroyer', length: 2, },
            ],
        }
    }

    copyShipsDocked() {
        return JSON.parse(JSON.stringify(this.state.shipsDocked));
    }

    handleDockDrop(shipID) {
        const newShipsDocked = this.copyShipsDocked();
        newShipsDocked.push(shipID);

        this.setState({ shipsDocked: newShipsDocked });
    }

    handleShipDrop(shipID) {
        const newShipsDocked = this.copyShipsDocked();
        const firstShipIndex = newShipsDocked.findIndex(dockedShipID => shipID.name === dockedShipID.name);
        newShipsDocked.splice(firstShipIndex, 1);

        this.setState({ shipsDocked: newShipsDocked });
    }

    renderShip(shipID) {
        const shipFound = this.state.shipsDocked.find(dockedShipID => dockedShipID.name === shipID.name);
        if (shipFound) {
            return genShip(shipFound, this.props.unit, shipID => this.handleShipDrop(shipID));
        } else {
            return (
                <div
                    style={{ height: this.props.unit * shipID.length, width: this.props.unit }}
                />
            )
        }
    }

    render() {
        return (
            <div
                className='dock'
                style={{
                    width: this.props.unit * (3 + 1) + 6,
                    borderRadius: this.props.unit / 5,
                }}
            >
                <DockTarget
                    onDrop={shipID => this.handleDockDrop(shipID)}
                >
                    <div className='port'>
                        {this.renderShip({ name: 'carrier', length: 5, })}
                    </div>
                    <div className='port'>
                        {this.renderShip({ name: 'battleship', length: 4, })}
                        <div className='divider' style={{ height: this.props.unit }} />
                        {this.renderShip({ name: 'destroyer', length: 2, })}
                    </div>
                    <div className='port'>
                        {this.renderShip({ name: 'cruiser', length: 3 })}
                        <div className='divider' style={{ height: this.props.unit }} />
                        {this.renderShip({ name: 'submarine', length: 3, })}
                    </div>
                </DockTarget>
            </div>
        )
    }
}