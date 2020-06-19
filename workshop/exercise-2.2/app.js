// Grab the main div
const main = document.querySelector('#main');
// Set max button limit
const MAX_BUTTONS = 20;

// Create changeColor function
const changeColor = function(event) {
    let btnID = event.target.id;
    let btnClicked = document.querySelector(`#${btnID}`);
    let btnClass = btnClicked.className;
    // Check for current class and switch
    if (btnClass === 'red') {
        btnClicked.className = 'green';
    } else if (btnClass === 'green') {
        btnClicked.className = 'red';
    }
}

// Loop to create buttons and assign IDs
for (let i = 1; i <= 20; i++) {
    let button = document.createElement('button');
    button.innerText = i;
    button.id = `btn-${i}`;
    button.className = 'red';
    main.appendChild(button);
    button.addEventListener('click', changeColor);
}
