document.addEventListener('DOMContentLoaded', function() {
    // allows different difficulty levels
    const words = {
        easy: ['apple', 'ball', 'cat', 'dog', 'fish'],
        medium: ['python', 'javascript', 'hangman', 'challenge', 'medium'],
        hard: ['quizzical', 'xylophone', 'juxtaposition', 'mnemonic', 'rhythmic']
    };
    let chosenWord;
    let correctGuesses;
    let incorrectGuesses;
    const wordDisplay = document.getElementById('wordSpotlight');
    const missesDisplay = document.getElementById('misses');
    const gameStatus = document.getElementById('gameStatus');
    const hangmanImage = document.getElementById('hangmanImage');
    const keyboard = document.getElementById('keyboard');
    const restartButton = document.getElementById('restartButton');
    const difficultyButtons = document.querySelectorAll('.difficulty');
    let currentDifficultyIndex = 0;

    function updateDifficultySelection() {
        difficultyButtons[currentDifficultyIndex].focus();
    }

    difficultyButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            currentDifficultyIndex = index;
            initializeGame(button.getAttribute('data-difficulty'));
        });
    });

    // can select difficulty with left and right arrow keys + enter
    document.addEventListener('keydown', function(event) {
        if (['ArrowLeft', 'ArrowRight'].includes(event.key)) {
            if (event.key === 'ArrowLeft') {
                currentDifficultyIndex = Math.max(currentDifficultyIndex - 1, 0);
            } else if (event.key === 'ArrowRight') {
                currentDifficultyIndex = Math.min(currentDifficultyIndex + 1, difficultyButtons.length - 1);
            }
            updateDifficultySelection();
        } else if (event.keyCode >= 65 && event.keyCode <= 90) {
            handleGuess(event.key.toUpperCase());
        }
    });

    function initializeGame(difficulty) {
        chosenWord = words[difficulty][Math.floor(Math.random() * words[difficulty].length)];
        correctGuesses = [];
        incorrectGuesses = [];
        missesDisplay.textContent = '';
        wordDisplay.textContent = '_ '.repeat(chosenWord.length).trim();
        hangmanImage.src = './images/0.jpg';
        gameStatus.textContent = '';
        restartButton.style.display = 'none';
        generateKeyboard();
        keyboard.style.display = 'block';
        gameStatus.className = '';
    }

    // onscreen keyboard (mainly for mobile users)
    function generateKeyboard() {
        keyboard.innerHTML = '';
        for (let i = 65; i <= 90; i++) {
            const button = document.createElement('button');
            button.textContent = String.fromCharCode(i);
            button.onclick = function() {
                handleGuess(button.textContent);
                button.disabled = true;
            };
            keyboard.appendChild(button);
        }
    }

    function handleGuess(guess) {
        const button = Array.from(keyboard.children).find(b => b.textContent === guess);
        if (button) {
            button.disabled = true; 
        }
    
        if (chosenWord.includes(guess.toLowerCase())) {
            correctGuesses.push(guess.toLowerCase());
            updateWordDisplay();
            if (!wordDisplay.textContent.includes('_')) {
                gameStatus.textContent = 'Congratulations! You guessed the word!';
                gameStatus.className = 'win';
                endGame();
            }
        } else {
            incorrectGuesses.push(guess);
            missesDisplay.textContent = incorrectGuesses.join(', ');
            if (incorrectGuesses.length < 10) {
                updateHangmanImage();
            }
            if (incorrectGuesses.length >= 10) {
                gameStatus.textContent = 'Game Over! Better luck next time!';
                gameStatus.className = 'lose';
                endGame();
            }
        }
    }
    

    function updateWordDisplay() {
        wordDisplay.textContent = chosenWord.split('').map(letter => correctGuesses.includes(letter) ? letter : '_').join(' ');
    }

    // increments through the hangman images 0-10
    function updateHangmanImage() {
        hangmanImage.src = `./images/${incorrectGuesses.length}.jpg`;
    }

    function endGame() {
        Array.from(keyboard.children).forEach(button => button.disabled = true);
        restartButton.style.display = 'block';
    }

    restartButton.onclick = function() {
        initializeGame(difficultyButtons[currentDifficultyIndex].getAttribute('data-difficulty'));
    };

    updateDifficultySelection();
});

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('backButton').addEventListener('click', function() {
        window.history.back();
    });

    // escape key to go back
    document.addEventListener('keydown', function(event) {
        if (event.key === "Escape") {
            window.history.back();
        }
    });
});
