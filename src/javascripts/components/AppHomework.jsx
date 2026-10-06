import React, { useState, useEffect } from 'react';
import GameStatus from './GameStatus.jsx';
import Target from './Target.jsx';

function App () {

    const [score, setScore] = useState(0)
    const [time, setTime] = useState(30)
    const [Game, setGame] = useState(false)
    const [position, setPosition] = useState({left: 0,top: 0})

    function moveTarget() {
        const left = Math.floor(Math.random() * 91)
        const top = Math.floor(Math.random() * 91)

        setPosition({
            left: left,
            top: top
        })
    }

    function startGame() {
        if (Game == false) {
            setScore(0)
            setTime(30)
            setGame(true)
            moveTarget()
        }
    }

    function clickTarget() {
        setScore(score + 1)
        moveTarget()
    }


    useEffect(() => {
    if (Game == false) {
        return
    }

    const timerInterval = setInterval(function() {
        setTime(function(currentTime) {

            if (currentTime <= 1) {
                setGame(false)
                return 0
            }

            else {
            return currentTime - 1
            }
        })
    }, 1000)

    return function() {
        clearInterval(timerInterval)
    }
}, [Game])


    useEffect(() => {

    if (Game == false) {
        return
    }

    const targetInterval = setInterval(function() {

        moveTarget()

    }, 1000)


    return function() {
        clearInterval(targetInterval)
    }

}, [Game])

     return (
        <div className='container'>

            <GameStatus
                score={score}
                time={time}
                Game={Game}
                onStart={startGame}
            />

            <div className='game-field'>

                <Target
                    position={position}
                    Game={Game}
                    onTargetClick={clickTarget}
                />

            </div>

        </div>
    )
}


export default App