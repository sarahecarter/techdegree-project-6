const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startButton = document.getElementById('startButton');
let missed = 0;

// Array of phrases
const phrases = ['cool beans', 'as if', 'groovy man', 'black cat', 'wishful thinking'];

// Listen for the start game button to be pressed
startButton.addEventListener('click', () => {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
});

// Randomly chooses and returns a phrase from the array
const getRandomPhraseAsArray = arr => {
    const getNumber = Math.floor((Math.random() * 5));
    const arrayIndex = arr[getNumber];
    return arrayIndex;
}

console.log(getRandomPhraseAsArray(phrases));

