document.addEventListener('DOMContentLoaded', function() {
    const gameButtons = document.querySelectorAll('.game-button');
    let currentFocus = 0;  // Initialize focus index

    // Function to update focus visually and functionally
    function updateFocus(index) {
        // Clear all focus effects first
        gameButtons.forEach(button => button.classList.remove('focused'));
        // Set focus to the new button
        gameButtons[index].classList.add('focused');
        // Optionally, you can directly focus the button for accessibility reasons
        gameButtons[index].focus();
    }

    // Initial setup: No focus class added until navigation starts
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
                // Navigate to the game link
                window.location.href = gameButtons[currentFocus].href;
                break;
        }
    });

    // Handle mouse click to update focus visually
    gameButtons.forEach(button => {
        button.addEventListener('click', () => {
            currentFocus = Array.from(gameButtons).indexOf(button);
            updateFocus(currentFocus);
        });
    });
});
