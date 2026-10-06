import React from 'react';

function GameStatus ({score, time, Game, onStart}) {

    let buttonText = 'Начать игру'

    if (Game == true) {
        buttonText = 'Игра идёт'
    }

    if (time == 0) {
        buttonText = 'Начать заново'
    }


    return (
        <div className='status'>

            <div className='title'>
                Поймай цель
            </div>

            <div className='score'>
                Счёт: {score}
            </div>

            <div className='time'>
                Время: {time}
            </div>

            <div
                className='button-start'
                onClick={onStart}
            >
                {buttonText}
            </div>

        </div>
    )
}

export default GameStatus