// Wait for the document to be fully loaded before executing the script
document.addEventListener('DOMContentLoaded', function() {
    // Select all elements with the class 'game-button' and store them in `gameButtons`
    const gameButtons = document.querySelectorAll('.game-button');
    // Initialize a variable to keep track of the currently focused game button
    let currentFocus = 0;  

    // Function to update the visual focus and actual focus on a specific game button
    function updateFocus(index) {
        // Remove the 'focused' class from all buttons to clear the previous focus
        gameButtons.forEach(button => button.classList.remove('focused'));
        // Add the 'focused' class to the button at the specified index and set it as the active focus
        gameButtons[index].classList.add('focused');
        gameButtons[index].focus();
    }

    // Listen for keydown events anywhere in the document
    document.addEventListener('keydown', function(e) {
        switch (e.key) {
            case 'ArrowRight': // When the right arrow key is pressed
                if (currentFocus < gameButtons.length - 1) { // Check if it's possible to move focus right
                    currentFocus++; // Move focus right
                    updateFocus(currentFocus); // Update the visual and actual focus
                }
                break;
            case 'ArrowLeft': // When the left arrow key is pressed
                if (currentFocus > 0) { // Check if it's possible to move focus left
                    currentFocus--; // Move focus left
                    updateFocus(currentFocus); // Update the visual and actual focus
                }
                break;
            case 'Enter': // When the Enter key is pressed
                window.location.href = gameButtons[currentFocus].href; // Navigate to the link of the currently focused button
                break;
        }
    });

    // Add a click event listener to each game button
    gameButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update the current focus to the button that was clicked
            currentFocus = Array.from(gameButtons).indexOf(button);
            updateFocus(currentFocus); // Update the visual and actual focus to the clicked button
        });
    });
});
