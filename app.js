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

// Randomly chooses and returns a phrase from an array
const getRandomPhraseAsArray = arr => {
    const getNumber = Math.floor((Math.random() * 5));
    const arrayIndex = [arr[getNumber]];
    return arrayIndex;
}

// Takes the array of letters and adds it to the display
const addPhraseToDisplay = arr => {
    for (i = 0 ; i < arr.length ; i += 1) {
        const li = document.createElement("LI");
        li.textContent = arr[i];
        const letters = /^[A-Za-z]+$/;
        if (i === letters) {
            li.className = "letter";
        }
        phrase.appendChild(li);
    }
}

const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);




