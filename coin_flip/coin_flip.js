document.getElementById('flipButton').addEventListener('click', function() {
  flipCoin();
});

// Function to handle the coin flipping logic
function flipCoin() {
  let result = Math.random() < 0.5 ? 'heads.jpg' : 'tails.jpg'; // Assume you have 'heads.jpg' and 'tails.jpg'
  let img = document.getElementById('coinImage');
  let message = document.getElementById('resultMessage');
  
  img.src = result;
  img.alt = result.includes('heads') ? "Heads" : "Tails";
  img.hidden = false; // Show the image

  // Update the result message with bright text
  message.textContent = result.includes('heads') ? "Heads!" : "Tails!";
  message.style.color = result.includes('heads') ? "#4CAF50" : "#FF5722"; // Green for Heads, Red for Tails
}

// Add event listener for the keyboard
document.addEventListener('keydown', function(event) {
  if (event.key === "Enter") {
      flipCoin();
  }
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