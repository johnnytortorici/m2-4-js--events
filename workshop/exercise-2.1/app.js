// Grab main div
const main = document.querySelector('#main');

// Set max number of buttons
const MAX_BUTTONS = 20;

// Create function to turn buttons green
const turnGreen = function(event) {
    let btnID = event.target.id;
    let buttonClicked = document.querySelector(`#${btnID}`);
    buttonClicked.style.backgroundColor = 'green';
    console.log('click');
    buttonClicked.removeEventListener('click', turnGreen);
}

// Loop to create buttons and assign IDs
for (let i = 1; i <= MAX_BUTTONS; i++) {
    let button = document.createElement('button');
    button.innerHTML = i;
    button.id = `btn-${i}`;
    main.appendChild(button);
    // Add event listener for each button
    button.addEventListener('click', turnGreen);
}
