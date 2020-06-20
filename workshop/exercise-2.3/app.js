// Grab main div
const main = document.querySelector('#main');
// Set max buttons
MAX_BUTTONS = 20;

// Create changeColor function
const changeColor = function(event) {
    btnID = event.target.id;
    btnClicked = document.querySelector(`#${btnID}`);
    btnClass = btnClicked.className;
    if (btnClass === 'red') {
        btnClicked.className = 'green';
    } else if (btnClass === 'green') {
        btnClicked.className = 'red';
    }
}

// Loop and create buttons
for (let i = 1; i <= MAX_BUTTONS; i++) {
    let button = document.createElement('button');
    button.innerText = i;
    main.appendChild(button);
    // Set class for bg color
    button.className = 'red';
    // Set id for btn
    button.id = `btn-${i}`;
    // Set random location for each button
    let randomNum1 = Math.round(Math.random() * 100);
    let randomNum2 = Math.round(Math.random() * 100);
    button.style.top = `${randomNum1}%`;
    button.style.left = `${randomNum2}%`;
    // Create event listeners for each button
    button.addEventListener('click', changeColor);
}