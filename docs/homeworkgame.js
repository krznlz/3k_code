/******/ (() => { // webpackBootstrap
var score = 0;
var time = 30;
var containerElement = document.createElement('div');
containerElement.classList.add('container');
document.body.appendChild(containerElement);
var containerStatus = document.createElement('div');
containerStatus.classList.add('status');
containerElement.appendChild(containerStatus);
var containerTitle = document.createElement('div');
containerTitle.classList.add('title');
containerTitle.innerText = 'Поймай цель';
containerStatus.appendChild(containerTitle);
var containerScore = document.createElement('div');
containerScore.classList.add('score');
containerScore.innerText = 'Счёт: ' + score;
containerStatus.appendChild(containerScore);
var containerTime = document.createElement('div');
containerTime.classList.add('time');
containerTime.innerText = 'Время: ' + time;
containerStatus.appendChild(containerTime);
var buttonStart = document.createElement('div');
buttonStart.classList.add('button-start');
buttonStart.innerText = 'Начать игру';
containerStatus.appendChild(buttonStart);
var gameField = document.createElement('div');
gameField.classList.add('game-field');
containerElement.appendChild(gameField);
var target = document.createElement('div');
target.classList.add('target');
gameField.appendChild(target);
target.style.display = 'none';
var targetInterval;
var timerInterval;
function moveTarget() {
  var maxLeft = gameField.clientWidth - target.clientWidth;
  var maxTop = gameField.clientHeight - target.clientHeight;
  var left = Math.floor(Math.random() * maxLeft);
  var top = Math.floor(Math.random() * maxTop);
  target.style.left = left + 'px';
  target.style.top = top + 'px';
}
buttonStart.addEventListener('click', function () {
  score = 0;
  time = 30;
  containerScore.innerText = 'Счёт: ' + score;
  containerTime.innerText = 'Время: ' + time;
  buttonStart.innerText = 'Кликай';
  target.style.display = 'block';
  moveTarget();
  clearInterval(targetInterval);
  clearInterval(timerInterval);
  targetInterval = setInterval(function () {
    moveTarget();
  }, 1000);
  timerInterval = setInterval(function () {
    time--;
    containerTime.innerText = 'Время: ' + time;
    if (time == 0) {
      clearInterval(targetInterval);
      clearInterval(timerInterval);
      target.style.display = 'none';
      buttonStart.innerText = 'Начать заново';
    }
  }, 1000);
});
target.addEventListener('click', function () {
  score++;
  containerScore.innerText = 'Счёт: ' + score;
  moveTarget();
});
/******/ })()
;