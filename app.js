// import functions and grab DOM elements
import { getRandomThrow } from './get-random-throw.js';

const rockButton = document.getElementById('rock').value;
const paperButton = document.getElementById('paper').value;
const scissorsButton = document.getElementById('scissors').value;

const winResultSpan = document.getElementById('win-result-span');
const loseResultSpan = document.getElementById('lose-result-span');
const drawResultSpan = document.getElementById('draw-result-span');

const winCounter = document.getElementById('win-counter');
const loseCounter = document.getElementById('lose-counter');
const drawCounter = document.getElementById('draw-counter');

const button = document.getElementById('play-button');
// initialize state
let gamesWon = 0;
let gamesLost = 0;
let gamesDrawn = 0;

// set event listeners to update state and DOM

button.addEventListener('click', () => {
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
})