'use strict';
//variable
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20,
    highers = Number(document.querySelector('.label-higher').textContent);

const displayMsg = (msg) => {
    document.querySelector('.message').textContent = msg;
}
const displayScore = (newScore) => {
    document.querySelector('.score').textContent = score;
}

displayScore(score);

//Logic Game Concept
document.querySelector('.check').addEventListener('click', () => {
    const userNumber = Number(document.querySelector('.guess').value);
    switch (true) {
        //when empty input
        case !userNumber:
            displayMsg('guess a number! No Number');
            break;
        //when player Win
        case secretNumber === userNumber:
            displayMsg('Correct Number!');
            document.querySelector('.number').textContent = secretNumber;
            document.querySelector('body').style.backgroundColor = 'green';
            if (score > highers) {
                highers = score;
                document.querySelector('.label-higher').textContent = score;
            }
            document.querySelector('.higher').textContent = score;
            break;
        //when guess number different
        case secretNumber !== userNumber:
            if (score > 1) {
                displayMsg(userNumber > secretNumber ? "Too High!" : "Too Low!");
                score--;
                displayScore(score);
            } else {
                displayMsg('You Lost!');
                displayScore(0);
            }
            break;
        default:
            console.log(userNumber);
    }

});

document.querySelector('.again').addEventListener('click', () => {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    displayMsg('Start Guessing...');
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';

});
