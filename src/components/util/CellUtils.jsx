export function genBody(row, col, length) {
    const cells = [];
    for (let i=0; i<length; i++) {
        cells.push([row + i, col]);
    }
    return cells;
}

export function hasOverlap(array1, array2) {
    for (const elem1 of array1) {
        for (const elem2 of array2) {
            if (comparePos(elem1, elem2)) {
                return true;
            }
        }
    }
    return false;
}

export function comparePos(pos1, pos2) {
    return pos1[0] === pos2[0] && pos1[1] === pos2[1];
}

export function genBorderWidth(pos) {
    return '1px ' + (pos[1] === 9 ? '1px ' : '0px ') + (pos[0] === 9 ? '1px ' : '0px ') + '1px';
}