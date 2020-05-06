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
const $playerOne = $(`.playerOne`);
const $playerTwo = $(`.playerTwo`)

//gameplay variables
const words = [`SPORTS`, `SHORTS`, `HURTS`];
let userWord = [];
let randomWord = ``;
let splitRandomWord;

//counters
let guessesRemaining = 5;
let lettersRemaining;

//players
let playerOneScore = 0;
let playerTwoScore = 0;
let player = 1;



///////////////////
//===Functions===//
///////////////////

//resets the whole game
const resetGame = () => {
    $userStringBox.empty();
    $counters.empty();
    guessesRemaining = 5;
    userWord = [];
    randomWord = ``;
    player = 1;
    playerOneScore = 0;
    playerTwoScore = 0;
    resetButtons();
    runGame();
}


//sets a new ronud
const resetRound = () => {
    $userStringBox.empty();
    $counters.empty();
    guessesRemaining = 5;
    userWord = [];
    randomWord = ``;
    resetButtons();
    runGame();

};

//checks player score to see if anyone won
const checkScore = () => {
    if (playerOneScore >= 200) {
        console.log(`player 1 won`)
        resetGame();
    } else if (playerTwoScore >= 200) {
        console.log(`player 2 won!`)
        resetGame();
    }

};

//flips the player 
const flipPlayer = () => {
    if (player === 1) {
        player = 2;
    } else {
        player = 1;
    }
};

//check the status of the game
const checkGameStatus = () => {
    if (lettersRemaining <= 0){
        console.log(`you win`);
        if (player === 1) {
            playerOneScore = playerOneScore + 100;
        } else {
            playerTwoScore = playerTwoScore + 100;
        }
        resetRound();
        flipPlayer();
        checkScore();

    }

    if (guessesRemaining <= 0){
        console.log(`you lose`);
        resetRound();
        flipPlayer();
        checkScore();
    }
};

//update the counters
const updateCounters = () => {
    $counters.empty();
    $counters.append(`<h3 class = "guesses-remaining">Guesses Remaining: ${guessesRemaining}</h3><h3 class = "letters-remaining">Letters Remaining: ${lettersRemaining}</h3>`);
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
    $counters.append(`<h3 class = "guesses-remaining">Guesses Remaining: ${guessesRemaining}</h3><h3 class = "letters-remaining">Letters Remaining: ${lettersRemaining}</h3>`);
};

//sets player scores
const setPlayerScore = () => {
    $playerOne.empty();
    $playerTwo.empty();
    $playerOne.append(`<h2>Player 1 Score: ${playerOneScore}</h4>`);
    $playerTwo.append(`<h2>Player 2 Score: ${playerTwoScore}</h4>`);
};

//change the color of the button to green
const changeGreen = (target) => {
    target.css(`background-color`, `#556B2F`);
    target.css(`box-shadow`, "0 0 4px 4px inset");
    target.css(`font-size`, "1.3rem");
}

//change the color of the button to red
const changeRed = (target) => {
    target.css(`background-color`, `#B22222`);
    target.css(`box-shadow`, "0 0 4px 4px inset");
    target.css(`font-size`, "1.3rem");
}

//actions when guess is right
const guessIsCorrect = (target) => {
    userWord[x] = splitRandomWord[x];
    $userStringBox.empty();
    $userStringBox.append(userWord);
    target.off(`click`);
    changeGreen(target);
    updateCounters();
};

//actions when guess is wrong
const guessIsIncorrect = (target) => {
    target.off(`click`);
    changeRed(target);
    updateCounters();
 
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

//function to reset the buttons once the round is over
const resetButtons = () => {
    $button.off(`click`);
    $button.css(`background-color`, `white`);
    $button.css(`box-shadow`, "0 0 4px 4px");
    $button.css(`font-size`, "1.5rem");
    $button.on(`click`, (event) => {
        const $element = $(event.currentTarget);
        checkLetter($element.text().trim(), $element);
    });

}


//Set event listener on buttons and animate them
$button.on(`click`, (event) => {
    const $element = $(event.currentTarget);
    checkLetter($element.text().trim(), $element);
    
});


//Main function for running the game
runGame = () => {
    setPlayerScore();
    getRandomWord();
    setUserWord();
    setCounters();
}

runGame();



