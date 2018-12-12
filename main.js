// query selectors
let main = document.querySelector('.main');
let span = main.querySelector('span');
let button = document.getElementById('changeText')

// event listeners
button.addEventListener('click', changeText)

// main functions
function changeText() {
    if(span.textContent === 'Scripts') {
        span.textContent = 'Games';
    } else {
        span.textContent = 'Scripts'
    }
}