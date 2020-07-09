// import functions and grab DOM elements
import { getRandomThrow } from './get-random-throw.js';

const body = document.getElementById('body');

const winResultSpan = document.getElementById('win-result-span');
const loseResultSpan = document.getElementById('lose-result-span');
const drawResultSpan = document.getElementById('draw-result-span');
const resetSpan = document.getElementById('reset-span');

const winCounter = document.getElementById('win-counter');
const loseCounter = document.getElementById('lose-counter');
const drawCounter = document.getElementById('draw-counter');
const resetCounter = document.getElementById('reset-counter');

const playButton = document.getElementById('play-button');
const resetButton = document.getElementById('reset-button');
// initialize state
let gamesWon = 0;
let gamesLost = 0;
let gamesDrawn = 0;
let numOfResets = 0;

loseCounter.textContent = gamesLost;
drawCounter.textContent = gamesDrawn;
winCounter.textContent = gamesWon;
resetCounter.textContent = numOfResets;

// set event listeners to update state and DOM

playButton.addEventListener('click', () => {
    const checkedInput = document.querySelector('input:checked');
    const userGuess = checkedInput.value;
    console.log(userGuess);

    let computerNumber = Math.ceil(Math.random() * 3);
    console.log(computerNumber);
    let computerSelection = "";

    if (computerNumber === 1) {
        computerSelection = "rock";
        console.log(computerSelection);
    }

    if (computerNumber === 2) {
        computerSelection = "paper";
        console.log(computerSelection);
    }

    if (computerNumber === 3) {
        computerSelection = "scissors";
        console.log(computerSelection);
    }

    if (userGuess === computerSelection) {
        gamesDrawn++;
        drawResultSpan.style.display = 'block';
        winResultSpan.style.display = 'none';
        loseResultSpan.style.display = 'none';
        body.style.backgroundColor = 'var(--color2)';
    }

    if (userGuess === 'rock' && computerSelection === 'paper') {
        gamesLost++;
        drawResultSpan.style.display = 'none';
        winResultSpan.style.display = 'none';
        loseResultSpan.style.display = 'block';
        body.style.backgroundColor = 'var(--color4)';
    }

    if (userGuess === 'rock' && computerSelection === 'scissors') {
        gamesWon++;
        drawResultSpan.style.display = 'none';
        winResultSpan.style.display = 'block';
        loseResultSpan.style.display = 'none';
        body.style.backgroundColor = 'var(--color3)';
    }

    if (userGuess === 'paper' && computerSelection === 'rock') {
        gamesWon++;
        drawResultSpan.style.display = 'none';
        winResultSpan.style.display = 'block';
        loseResultSpan.style.display = 'none';
        body.style.backgroundColor = 'var(--color3)';
    }

    if (userGuess === 'paper' && computerSelection === 'scissors') {
        gamesLost++;
        drawResultSpan.style.display = 'none';
        winResultSpan.style.display = 'none';
        loseResultSpan.style.display = 'block';
        body.style.backgroundColor = 'var(--color4)';
    }

    if (userGuess === 'scissors' && computerSelection === 'paper') {
        gamesWon++;
        drawResultSpan.style.display = 'none';
        winResultSpan.style.display = 'block';
        loseResultSpan.style.display = 'none';
        body.style.backgroundColor = 'var(--color3)';
    }

    if (userGuess === 'scissors' && computerSelection === 'rock') {
        gamesLost++;
        drawResultSpan.style.display = 'none';
        winResultSpan.style.display = 'none';
        loseResultSpan.style.display = 'block';
        body.style.backgroundColor = 'var(--color4)';
    }

    loseCounter.textContent = gamesLost;
    drawCounter.textContent = gamesDrawn;
    winCounter.textContent = gamesWon;

    resetButton.style.display = 'inline';
})

resetButton.addEventListener('click', () => {
    resetButton.style.display = 'none';
    resetSpan.style.display = 'block';

    gamesWon = 0;
    gamesLost = 0;
    gamesDrawn = 0;
    loseCounter.textContent = gamesLost;
    drawCounter.textContent = gamesDrawn;
    winCounter.textContent = gamesWon;
    drawResultSpan.style.display = 'none';
    winResultSpan.style.display = 'none';
    loseResultSpan.style.display = 'none';
    body.style.backgroundColor = 'var(--color1)';
    
    numOfResets++;
    resetCounter.textContent = numOfResets;

    console.clear();
})