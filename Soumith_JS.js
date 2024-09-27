'use strict';

var number = Math.trunc(Math.random() * 20) + 1;
var score = 20;
console.log(number);

var highscore = 0;

var againBtn = function () {
  number = Math.trunc(Math.random() * 20) + 1;
  console.log(number);
  score = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
};

var wrongGuess = function () {
  score -= 1;
};

var gameOver = function () {
  document.querySelector('.message').textContent = 'Game Over Beeyoch!!!';
};

var notGameOverHigh = function () {
  document.querySelector('.message').textContent = 'Too High, Guess Again!!!';
  wrongGuess();
  document.querySelector('.score').textContent = score;
};

var notGameOverLow = function () {
  document.querySelector('.message').textContent = 'Too Low, Guess Again!!!';
  wrongGuess();
  document.querySelector('.score').textContent = score;
};

var checkBtn = function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number entered';
  } else if (guess === number) {
    document.querySelector('.message').textContent =
      'You have guessed the correct number';
    document.querySelector('.number').textContent = number;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess > number) {
    if (score > 0) {
      notGameOverHigh();
    } else {
      gameOver();
    }
  } else if (guess < number) {
    if (score > 0) {
      notGameOverLow();
    } else {
      gameOver();
    }
  }
};

document.querySelector('.check').addEventListener('click', function () {
  checkBtn();
});

document.querySelector('.again').addEventListener('click', function () {
  againBtn();
});
