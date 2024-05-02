document.addEventListener('DOMContentLoaded', function() {
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

    difficultyButtons.forEach(button => {
        button.addEventListener('click', function() {
            initializeGame(button.getAttribute('data-difficulty'));
        });
    });

    function initializeGame(difficulty) {
        chosenWord = words[difficulty][Math.floor(Math.random() * words[difficulty].length)];
        correctGuesses = [];
        incorrectGuesses = [];
        missesDisplay.textContent = '';
        wordDisplay.textContent = '_ '.repeat(chosenWord.length).trim();
        hangmanImage.src = './images/0.jpg';
        gameStatus.textContent = ''; // Clear previous status
        restartButton.style.display = 'none';
        generateKeyboard();
        keyboard.style.display = 'block';
        gameStatus.className = ''; // Reset status style
    }

    function generateKeyboard() {
        keyboard.innerHTML = ''; // Clear previous keyboard
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
            updateHangmanImage();
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

    function updateHangmanImage() {
        hangmanImage.src = `./images/${incorrectGuesses.length}.jpg`;
    }

    function endGame() {
        Array.from(keyboard.children).forEach(button => button.disabled = true);
        restartButton.style.display = 'block';
    }

    restartButton.onclick = function() {
        initializeGame(difficultyButtons[0].getAttribute('data-difficulty')); // Restart at the last selected difficulty
    };
});

document.addEventListener('DOMContentLoaded', () => {
    // Handle click on the back button
    document.getElementById('backButton').addEventListener('click', function() {
      window.history.back();
    });
  
    // Handle Escape key press to navigate back
    document.addEventListener('keydown', function(event) {
      if (event.key === "Escape") { // Use event.code if "Escape" doesn't work
        window.history.back();
      }
    });
  });