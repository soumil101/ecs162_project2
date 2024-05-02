document.addEventListener('DOMContentLoaded', function() {
    const gameButtons = document.querySelectorAll('.game-button');
    let currentFocus = 0;

    gameButtons[currentFocus].classList.add('focused');

    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowRight') {
            if (currentFocus < gameButtons.length - 1) {
                gameButtons[currentFocus].classList.remove('focused');
                currentFocus++;
                gameButtons[currentFocus].classList.add('focused');
            }
        } else if (e.key === 'ArrowLeft') {
            if (currentFocus > 0) {
                gameButtons[currentFocus].classList.remove('focused');
                currentFocus--;
                gameButtons[currentFocus].classList.add('focused');
            }
        } else if (e.key === 'Enter') {
            window.location.href = gameButtons[currentFocus].href;
        }
    });

    // To visually indicate focus
    gameButtons.forEach(button => {
        button.addEventListener('click', () => {
            gameButtons[currentFocus].classList.remove('focused');
            currentFocus = Array.from(gameButtons).indexOf(button);
            button.classList.add('focused');
        });
    });
});
