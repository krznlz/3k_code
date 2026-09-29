let score = 0
let time = 30

const containerElement = document.createElement('div')
containerElement.classList.add('container')
document.body.appendChild(containerElement)

const containerStatus = document.createElement('div')
containerStatus.classList.add('status')
containerElement.appendChild(containerStatus)

const containerTitle = document.createElement('div')
containerTitle.classList.add('title')
containerTitle.innerText = 'Поймай цель'
containerStatus.appendChild(containerTitle)

const containerScore = document.createElement('div')
containerScore.classList.add('score')
containerScore.innerText = 'Счёт: ' + score
containerStatus.appendChild(containerScore)

const containerTime = document.createElement('div')
containerTime.classList.add('time')
containerTime.innerText = 'Время: ' + time
containerStatus.appendChild(containerTime)

const buttonStart = document.createElement('div')
buttonStart.classList.add('button-start')
buttonStart.innerText = 'Начать игру'
containerStatus.appendChild(buttonStart)

const gameField = document.createElement('div')
gameField.classList.add('game-field')
containerElement.appendChild(gameField)

const target = document.createElement('div')
target.classList.add('target')
gameField.appendChild(target)

target.style.display = 'none'

let targetInterval
let timerInterval

function moveTarget() {
    const maxLeft = gameField.clientWidth - target.clientWidth
    const maxTop = gameField.clientHeight - target.clientHeight

    const left = Math.floor(Math.random() * maxLeft)
    const top = Math.floor(Math.random() * maxTop)

    target.style.left = left + 'px'
    target.style.top = top + 'px'
}

buttonStart.addEventListener('click', function() {
    score = 0
    time = 30

    containerScore.innerText = 'Счёт: ' + score
    containerTime.innerText = 'Время: ' + time
    buttonStart.innerText = 'Кликай'

    target.style.display = 'block'
    moveTarget()

    clearInterval(targetInterval)
    clearInterval(timerInterval)

    targetInterval = setInterval(function() {
        moveTarget()
    }, 1000)

    timerInterval = setInterval(function() {
        time--
        containerTime.innerText = 'Время: ' + time

        if (time == 0) {
            clearInterval(targetInterval)
            clearInterval(timerInterval)

            target.style.display = 'none'
            buttonStart.innerText = 'Начать заново'
        }
    }, 1000)
})

target.addEventListener('click', function() {
    score++
    containerScore.innerText = 'Счёт: ' + score
    moveTarget()
})