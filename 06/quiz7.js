const $box = document.querySelector('.box');
const $bug = document.querySelector('#bug');
const $point = document.querySelector('#point');
const $life = document.querySelector('#life');

const boxRect = $box.getBoundingClientRect();

let point = 0;
let life = 10;

function plusPoint() {
  point++;
  setPointAndLife();
}

function setPointAndLife() {
  $point.innerText = point;
  $life.innerText = life;
}

function minusPoint() {
  life--;
  setPointAndLife();
  if (life == 0) {
    gameOver();
  }
}

function gameOver() {
  alert('Game Over!!');
}

function randomPosition(event) {
  event.stopPropagation();
  // 0 ~ 380
  const x = Math.floor(Math.random() * (boxRect.width + 1));
  const y = Math.floor(Math.random() * (boxRect.height + 1));

  $bug.style.left = x + 'px';
  $bug.style.top = y + 'px';

  plusPoint();
}

function init() {
  setPointAndLife();
  $bug.addEventListener('click', randomPosition);
  $box.addEventListener('click', minusPoint);
}

init();
