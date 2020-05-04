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
const guessIsCorrect = (target) => {
    userWord[x] = splitRandomWord[x];
    $userStringBox.empty();
    $userStringBox.append(userWord);
    updateCounters();
    setTimeout(() => {
        target.css(`background-color`, `#556B2F`)
        target.css(`box-shadow`, "0 0 2px 2px")
    }, 200);
    target.off(`click`);
};

//actions when guess is wrong
const guessIsIncorrect = (target) => {
    updateCounters();
    setTimeout(() => {
        target.css(`background-color`, `#B22222`)
        target.css(`box-shadow`, "0 0 2px 2px")
    }, 200);
    target.off(`click`);
 
};

//check the letter that is guessed
const checkLetter = (letter, target) => {
    
    const letterCheck = splitRandomWord.some((value, index) => {
        return value == letter;
    })

    for (x = 0; x < splitRandomWord.length; x++){
        if(letter == splitRandomWord[x]){
            lettersRemaining--;
            guessIsCorrect(target);
        } 
    }

    if (letterCheck === false) {
        guessesRemaining--;
        guessIsIncorrect(target);
    }

};


// animate the buttons
$button.on(`click`, (event) => {
    const $element = $(event.currentTarget);
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

    checkLetter($element.text().trim(), $element);
    

});




getRandomWord();
setUserWord();
setCounters();



