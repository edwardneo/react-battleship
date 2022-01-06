import React from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../constants/ItemTypes";

export default function DockTarget({ onDrop, children }) {
    const [, drop] = useDrop(() => ({
        accept: ItemTypes.SHIP,
        drop: (shipID) => {
            onDrop(shipID);
            return { name: 'dock', position: null };
        }
    }));

    return (
        <div
            className='dock-target'
            ref={drop}
        >
            {children}
        </div>
    )
}