document.getElementById('flipButton').addEventListener('click', function() {
  flipCoin();
});

function flipCoin() {
  let result = Math.random() < 0.5 ? 'heads.jpg' : 'tails.jpg'; // images from https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Flincoln-head-penny&psig=AOvVaw0eNWcslwr8Oc6zFCoRvq_B&ust=1714857447875000&source=images&cd=vfe&opi=89978449&ved=0CBQQjhxqFwoTCNCzzPqz8oUDFQAAAAAdAAAAABAE
  let img = document.getElementById('coinImage');
  let message = document.getElementById('resultMessage');
  
  img.src = result;
  img.alt = result.includes('heads') ? "Heads" : "Tails";
  img.hidden = false; 

  message.textContent = result.includes('heads') ? "Heads!" : "Tails!";
  message.style.color = result.includes('heads') ? "#4CAF50" : "#FF5722"; 
}

document.addEventListener('keydown', function(event) {
  if (event.key === "Enter") {
      flipCoin();
  }
});

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('backButton').addEventListener('click', function() {
    window.history.back();
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") { 
      window.history.back();
    }
  });
});