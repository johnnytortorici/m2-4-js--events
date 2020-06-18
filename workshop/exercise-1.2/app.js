// Exercise 1.2
// ------------
console.log('exercise 1.2');

// Grab elements
const result = document.querySelector('#result');
const time = document.querySelector('#time');

// Create clickScreen function
const clickScreen = function() {
    result.innerText = 'You Win! :)';
    document.body.removeEventListener('click', clickScreen);
    clearTimeout(timesUp);
};

// Create youLose function if timeLimit is reached
const youLose = function() {
    result.innerText = 'You Lose! :(';
    document.body.removeEventListener('click', clickScreen);
};

// Add event listener
document.body.addEventListener('click', clickScreen);

// Set timeLimit for random time before user loses
const timeLimit = Math.round(Math.random() * 5);
const timeLimitMs = timeLimit * 1000;
time.innerText = `${timeLimit}`;
const timesUp = setTimeout(youLose, timeLimitMs);

// Live countdown
let timeLeft = timeLimit;

const liveCounter = function() {
    if (timeLeft > 0) {
        timeLeft -= 1;
        time.innerText = `${timeLeft}`;
    } else {
        clearInterval(countdown);
    }
    
};

const countdown = setInterval(liveCounter, 1000);
