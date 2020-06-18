// Exercise 1.1
// ------------
console.log('exercise 1.1');

// Grab onto result p
const result = document.querySelector('#result');

// Create clickScreen function
const clickScreen = function() {
    result.innerText = 'You Win! :)';
    document.body.removeEventListener('click', clickScreen);
    clearTimeout(lost);
};

// Create youLose function if 1 sec has passed
const youLose = function() {
    result.innerText = 'You Lose! :(';
    document.body.removeEventListener('click', clickScreen);
};

// Add eventListener for click
document.body.addEventListener('click', clickScreen);

// Create 1 sec timeout
const lost = setTimeout(youLose, 1000);