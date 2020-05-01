const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startButton = document.getElementById('startButton');
let missed = 0;

const phrases = ['black cat', 'cool beans', 'as if', 'groovy man', 'wishful thinking'];

startButton.addEventListener('click', () => {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
});

