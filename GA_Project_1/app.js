/////////////////////////
//=====================//
//==== HANGMAN GAME ===//
//=====================//
/////////////////////////



////////////////////////
//==Global Variables==//
////////////////////////

//jQuery Variables
const $button = $(`.button`);
const $userStringBox = $(`.guess-container`);
const $counters = $(`.counter`);

//gameplay variables
const words = [`SPORTS`, `SHORTS`, `HURTS`];
const userWord = [];
const guessedLetters = [];
let randomWord = ``;
let splitRandomWord;

//counters
let guessesRemaining = 5;
let lettersRemaining;

//players
const playerOneScore = 0;
const playerTwoScore = 0;
const player = 1;



///////////////////
//===Functions===//
///////////////////

//resets the game 
const resetGame = () => {

}

//checks player score to see if anyone won
const checkScore = () => {

}

//flips the player 
const flipPlayer = () => {

}

//check the status of the game
const checkGameStatus = () => {
    if (lettersRemaining <= 0){
        alert(`congrats you won!`);
    }

    if (guessesRemaining <= 0){
        alert(`sorry you lose!`)
    }
};

//update the counters
const updateCounters = () => {
    $counters.empty();
    $counters.append(`<h3>Guesses Remaining: ${guessesRemaining}</h3><h3>Letters Remaining: ${lettersRemaining}</h3>`);
    checkGameStatus();
};

//get the random word
const getRandomWord = () => {
    randomWord = words[Math.floor(Math.random() * words.length)];
};

//set the user word to blank
const setUserWord = () => {
    splitRandomWord = randomWord.split(``);
    for (x = 0; x < splitRandomWord.length; x++) {
        userWord[x] = `_`;
    }
    $userStringBox.append(userWord);
};

//set the Counters
const setCounters = () => {
    lettersRemaining = splitRandomWord.length;
    $counters.append(`<h3>Guesses Remaining: ${guessesRemaining}</h3><h3>Letters Remaining: ${lettersRemaining}</h3>`);
};


//actions when guess is right
const guessIsCorrect = () => {
    userWord[x] = splitRandomWord[x];
    $userStringBox.empty();
    $userStringBox.append(userWord);
    updateCounters();
};

//actions when guess is wrong
const guessIsIncorrect = () => {
    updateCounters();
 
};

//check the letter that is guessed
const checkLetter = (letter) => {
    
    const letterCheck = splitRandomWord.some((value, index) => {
        return value == letter;
    })

    for (x = 0; x < splitRandomWord.length; x++){
        if(letter == splitRandomWord[x]){
            lettersRemaining--;
            guessIsCorrect();
        } 
    }

    if (letterCheck === false) {
        guessesRemaining--;
        guessIsIncorrect();
    }

};


// animate the buttons
$button.on(`click`, (event) => {
    const $element = $(event.currentTarget);
    const separatedLetter = $element.text().trim();
    setTimeout(() => {
        $element.css(`background-color`, `#DCDCDC`)
        $element.css(`box-shadow`, "0 0 2px 2px inset")
        $element.css(`font-size`, "1.3rem")
    }, 0);
    setTimeout(() => {
        $element.css(`background-color`, `white`)
        $element.css(`box-shadow`, "0 0 2px 2px")
        $element.css(`font-size`, "1.5rem")
    }, 200);
    setTimeout(() => {
        $element.css(`background-color`, `#B22222`)
        $element.css(`box-shadow`, "0 0 2px 2px")
        $element.empty();
        $element.text(separatedLetter);
    }, 300);

    checkLetter($element.text().trim())

});




getRandomWord();
setUserWord();
setCounters();



