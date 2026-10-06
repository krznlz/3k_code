import React from 'react';

function Target ({position, Game, onTargetClick}) {

    const targetStyle = {
        left: position.left + '%',
        top: position.top + '%'
    }


    if (Game == false) {
        return
    }


    return (
        <div
            className='target'
            style={targetStyle}
            onClick={onTargetClick}
        >
        </div>
    )
}

export default Target