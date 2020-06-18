// Exercise 1.0
// ------------
console.log('exercise-1');

const main = document.querySelector('#main');

const clickScreen = function () {
    main.innerHTML = '<h1>You win!</h1>';
    main.removeEventListener('click', clickScreen);
};

main.addEventListener('click', clickScreen);