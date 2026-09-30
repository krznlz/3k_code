import React, { useState } from 'react';
import ChoiceButton from './ChoiceButton.jsx';
import ScoreBoard from './ScoreBoard.jsx';
import HistoryList from './HistoryList.jsx'

const answers = ['Камень', 'Ножницы', 'Бумага']

function App () {

    const [score, setScore] = useState({player:0, computer:0})
    const [history, setHistory] = useState([])

    function playRound (playerChoice) {
        console.log(playerChoice)
        const botChoice = answers[Math.floor(Math.random() * answers.length)]

        let classValue = ''

        if (playerChoice == botChoice) {
            setScore({
                player: score.player + 1,
                computer: score.computer + 1
            })
            classValue = 'grey'
        }
        else if (
            (playerChoice == 'Камень' && botChoice == 'Ножницы') ||
            (playerChoice == 'Ножницы' && botChoice == 'Бумага') ||
            (playerChoice == 'Бумага' && botChoice == 'Камень')
        ) {
            score[0]++
            setScore({
                ...score,
                player: score.player + 1,
            })
            classValue = 'green'
        }
        else {
             setScore({
                ...score,
                computer: score.computer + 1,
            })
            classValue = 'red'
        }

        setHistory([
        ...history,
            {
            id:Date.now(),
            style: classValue,
            text: playerChoice + '-' + botChoice
            }
        ])
    }

    return (
        <div className = 'container'>
            <div className='answers'>
                {answers.map((answer,index) => (
                    <ChoiceButton
                    key={index}
                    choice={answer}
                    onChoice={playRound}
                    />
                ))}
                <div className='status'>
                    <ScoreBoard score={score} />
                    <HistoryList history={history}/>
                </div>
            </div>
        </div>
    )
}

export default App