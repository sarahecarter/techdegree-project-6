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
    const arrayIndex = arr[getNumber];
    return arrayIndex.split("");
}

// Takes the array of letters and adds it to the display
const addPhraseToDisplay = arr => {
    for (let i = 0 ; i < arr.length ; i += 1) {
        const li = document.createElement("LI");
        li.textContent = arr[i];
        if (li.textContent === ' ') {
            li.className = 'space';
        } else {
            li.className = 'letter';
        }
        phrase.appendChild(li);
    }
}

const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);


// Checks if a letter is in the display
const checkLetter = button => {
    const listItems = document.getElementsByClassName('letter');
    let match = null;
    for (let i = 0 ; i < listItems.length ; i += 1) {
        if (listItems[i].textContent === button) {
            listItems[i].classList.add('show');
            match = listItems[i].textContent;
        } 
        
    } 
    return match;
}

// Listens for events from keyboard
qwerty.addEventListener('click', e => {
    if (e.target.tagName === 'BUTTON'){
        e.target.className = 'chosen';
        e.target.disabled = true;
        const letterFound = checkLetter(e.target.innerHTML); 
    }
    
});



