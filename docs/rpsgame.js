/******/ (() => { // webpackBootstrap
var score = [0, 0];
var answers = ['Камень', 'Ножницы', 'Бумага'];
var containerElement = document.createElement('div');
containerElement.classList.add('container');
document.body.appendChild(containerElement);
var containerAnswers = document.createElement('div');
containerAnswers.classList.add('answers');
document.body.appendChild(containerAnswers);
var containerStatus = document.createElement('div');
containerStatus.classList.add('status');
document.body.appendChild(containerStatus);
var containerScore = document.createElement('div');
containerAnswers.classList.add('container-score');
containerStatus.appendChild(containerScore);
for (var i = 0; i < score.length; i++) {
  console.log(score[i]);
  var elementScore = document.createElement('div');
  elementScore.classList.add('score');
  elementScore.innerText = score[i];
  containerScore.appendChild(elementScore);
}
var containerTitle = document.createElement('div');
containerTitle.classList.add('title');
containerTitle.innerText = 'Счёт игры:';
containerStatus.appendChild(containerTitle);
var containerText = document.createElement('div');
containerText.classList.add('container-text');
containerStatus.appendChild(containerText);
var scoreElements = document.querySelectorAll('.score');
answers.forEach(function (answer, i) {
  var elementAnswer = document.createElement('div');
  elementAnswer.classList.add('answer');
  elementAnswer.innerText = answer;
  containerAnswers.appendChild(elementAnswer);
  var className = '';
  elementAnswer.addEventListener('click', function () {
    var clickAnswer = this.textContent;
    var botAnswer = answers[Math.floor(Math.random() * answers.length)];
    if (clickAnswer == botAnswer) {
      score[0]++;
      score[1]++;
      className = 'grey';
    } else if (clickAnswer == 'Камень' && botAnswer == 'Ножницы' || clickAnswer == 'Ножницы' && botAnswer == 'Бумага' || clickAnswer == 'Бумага' && botAnswer == 'Камень') {
      score[0]++;
      className = 'green';
    } else {
      score[1]++;
      className = 'red';
    }
    var itemHistory = document.createElement('div');
    itemHistory.classList.add(className);
    itemHistory.innerText = clickAnswer + ' - ' + botAnswer;
    containerText.appendChild(itemHistory);
    scoreElements.forEach(function (scoreElement, indexScore) {
      scoreElement.innerText = score[indexScore];
    });
  });
});
/******/ })()
;