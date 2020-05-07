# Dangling-Boy:
A simple Hangman Game made with HTML, CSS, and JS

## Technologies Used:
This game is built with HTML, CSS, JS, & jQuery. HTML was used to establish the main elements on the page including the buttons, CSS was used for the animations as well as styling the entire page, and JS was mainly used for producing a random word, and allowing the user to then guess that word.

## Approach Taken in Building This Game:
When building this game the approach I took was starting out with a very detailed wireframe. I already knew what I wanted the game to look like so I first mapped out each element, which would be flexbox's, and also which elements I would add later using jQuery.

After wireframing I started out by building out the HTML and CSS. Using these two technologies I was able to have a nice layout for my game where I could populate in information.

Once the canvas of the game was built I then started on the JS. The main things needed for this game were a random word, a place to store the users guesses, the ability for the user to click on a button to guess, and the ability to update all of the counters and score. I started out by making variables for each of these elements and then began building out simple functionality. First I created a function that generated a random word, then I created a function that took this random word and gave the user a blank array that is exactly as long as the random word (and shows up on the screen). After those two pieces were in place I created function to count the numbers of guesses and the letters remaining as well as update the score. Those functions call the next functions I created which check the status of the game just to see if the round has been won/loss or the game has been won/lost.

After completing the game's functionality I added in a few features with CSS and JS such as modals and an animation of the title heading.

## Link to the Live Site:
https://sambevan5.github.io/SEIR-Project-1/

## Unsolved Problems:
There were no unsolved problems here. I got done what I wanted to. With that being said there are a bunch of features I would of loved to have more time to work on such as a mobile friendly responsive layout and an intro landing page.
