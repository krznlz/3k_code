const score = [0,0]
const answers = ['Камень', 'Ножницы', 'Бумага']

const containerElement = document.createElement('div')
containerElement.classList.add('container')
document.body.appendChild(containerElement)

const containerAnswers = document.createElement('div')
containerAnswers.classList.add('answers')
document.body.appendChild(containerAnswers)

const containerStatus = document.createElement('div')
containerStatus.classList.add('status')
document.body.appendChild(containerStatus)

const containerScore = document.createElement('div')
containerAnswers.classList.add('container-score')
containerStatus.appendChild(containerScore)

for (let i = 0; i < score.length; i++) {
    console.log(score[i])
    const elementScore = document.createElement('div')
    elementScore.classList.add('score')
    elementScore.innerText = score[i]
    containerScore.appendChild(elementScore)
}

const containerTitle = document.createElement('div')
containerTitle.classList.add('title')
containerTitle.innerText = 'Счёт игры:'
containerStatus.appendChild(containerTitle)

const containerText = document.createElement('div')
containerText.classList.add('container-text')
containerStatus.appendChild(containerText)

const scoreElements = document.querySelectorAll('.score')

answers.forEach ((answer, i) => {
    const elementAnswer = document.createElement('div')
    elementAnswer.classList.add('answer')
    elementAnswer.innerText = answer
    containerAnswers.appendChild(elementAnswer)

    let className = ''

    elementAnswer.addEventListener('click', function() {
        const clickAnswer = this.textContent
        const botAnswer = answers [Math.floor(Math.random() * answers.length)]

        if (clickAnswer == botAnswer) {
            score[0]++
            score[1]++
            className = 'grey'
        }
        else if (
            (clickAnswer == 'Камень' && botAnswer == 'Ножницы') ||
            (clickAnswer == 'Ножницы' && botAnswer == 'Бумага') ||
            (clickAnswer == 'Бумага' && botAnswer == 'Камень')
        ) {
            score[0]++
            className = 'green'
        }
        else {
            score[1]++
            className = 'red'
        }

        const itemHistory = document.createElement('div')
        itemHistory.classList.add(className)
        itemHistory.innerText = clickAnswer + ' - ' + botAnswer
        containerText.appendChild(itemHistory)

        scoreElements.forEach ((scoreElement, indexScore) => {
            scoreElement.innerText = score[indexScore]
        })
    })
})