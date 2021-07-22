import '../styles/style.scss';

import Mole from '../assets/mole.png';

const startBtn = document.getElementById('start');
const holes = document.querySelectorAll('.hole');
const timeRemained = document.getElementById('timeleft');
const score = document.getElementById('score');

let result = 0;
let timeLeft = timeRemained.textContent;
var hitHole;
var timer;
var startGame;

function randomHole() {
    holes.forEach(element => {
        element.classList.remove('mole');
    });

    let randomHole = holes[Math.floor(Math.random()*9)];
    randomHole.classList.add('mole');

    hitHole = randomHole.id;
}

holes.forEach(el => {
    el.addEventListener('mouseup', () => {
        if(el.id === hitHole) {
            result++;
            score.textContent = result;
        }
    })
})

function moveMole() {
    timer = setInterval(randomHole, 750);
}

function countdown() {
    timeLeft--;
    timeRemained.textContent = timeLeft;

    if(timeLeft < 0) {
        clearInterval(timer);
        clearInterval(startGame);
        if(!alert(`Game Over! Your score is ${result}!`)){
            window.location.reload();
        }
    }
}

startBtn.addEventListener('click', () => {
    moveMole();
    startGame = setInterval(countdown, 1000);
})

