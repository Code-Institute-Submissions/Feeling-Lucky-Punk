// Code came from Build a Quiz App by James Quick on Youtube tutorial

// Setting up constants for questions and answers
const quote = document.getElementById('quote');
const movies = Array.from(document.getElementsByClassName('movie-text'));
const quoteCounterText = document.getElementById('quoteCounter');
const scoreText = document.getElementById('score');

// Set up variables for game

let currentQuote = {};
let acceptingAnswers = false;
let score = 0;
let availableQuotes = [];
let quoteCounter = 0;
let quotes = [];

// Setting up score and amount of questions
const correctBonus = 10; 
const maxQuestions = 10;

// Pulling questions from local JSON file
fetch('assets/js/quotes.json')
    .then((res) => {
        return res.json();
    })
    .then((loadedQuotes) => {
        quotes = loadedQuotes;
        startGame();
    })
    .catch((err) => {
        console.error(err);
    });


// Function for starting the game
function startGame() {
    quoteCounter = 0;
    score = 0;
    availableQuotes = [...quotes];
    // console.log(availableQuotes)
    getNewQuote();
}

// Pulling new random quote from the JSON file
function getNewQuote() {

    if (availableQuotes.length == 0 || quoteCounter >= maxQuestions) {
        localStorage.setItem('mostRecentScore', score);
        // Return to home page
        return window.location.assign("end.html");
    }

    // Increment quoteCounter by one
    quoteCounter++;
    quoteCounterText.innerText = quoteCounter + "/" + maxQuestions;

    const quoteIndex = Math.floor(Math.random() * availableQuotes.length);
    currentQuote = availableQuotes[quoteIndex];
    quote.innerText = `${"“"}${currentQuote.Quote}${"“"}`;


    movies.forEach((movie) => {
        const number = movie.dataset['number'];
        movie.innerText = currentQuote['movie' + number];
    });

    // Remove used questions
    availableQuotes.splice(quoteIndex, 1);

    acceptingAnswers = true;
};

// Getting a new question after answer is chosen
movies.forEach((movie) => {
    movie.addEventListener('click', e => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedMovie = e.target;
        const selectedAnswer = selectedMovie.dataset['number'];

        // CLass(colour) applied for right and wrong answers
        const classToApply =
            selectedAnswer == currentQuote.answer ? 'correct' : 'incorrect';
        // console.log(classToApply)

        // With correct answer increment score by correctBonus
        if (classToApply === 'correct') {
            incrementScore(correctBonus);
        }

        selectedMovie.parentElement.classList.add(classToApply);

        // Removes applied style and gives time before moving to next question
        setTimeout(() => {
            selectedMovie.parentElement.classList.remove(classToApply);
            getNewQuote();
        }, 1000)
    });
});

// incrementing the game score
function incrementScore(num) {
    score += num;
    scoreText.innerText = score;
}