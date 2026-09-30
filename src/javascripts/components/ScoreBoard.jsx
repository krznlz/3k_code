import React from 'react';

function ScoreBoard (score) {

    return (
        <>
            <div className="title">Счет игры:</div>
            <div className="container-score">
                <div className="score">{score.player}</div>
                <div className="score">{score.computer}</div>
            </div>
        </>
    )
}

export default ScoreBoard;