document.addEventListener('DOMContentLoaded', function() {
    const gameButtons = document.querySelectorAll('.game-button');
    let currentFocus = 0;  

    function updateFocus(index) {
        gameButtons.forEach(button => button.classList.remove('focused'));
        gameButtons[index].classList.add('focused');
        gameButtons[index].focus();
    }

    document.addEventListener('keydown', function(e) {
        switch (e.key) {
            case 'ArrowRight':
                if (currentFocus < gameButtons.length - 1) {
                    currentFocus++;
                    updateFocus(currentFocus);
                }
                break;
            case 'ArrowLeft':
                if (currentFocus > 0) {
                    currentFocus--;
                    updateFocus(currentFocus);
                }
                break;
            case 'Enter':
                window.location.href = gameButtons[currentFocus].href;
                break;
        }
    });

    gameButtons.forEach(button => {
        button.addEventListener('click', () => {
            currentFocus = Array.from(gameButtons).indexOf(button);
            updateFocus(currentFocus);
        });
    });
});
