document.getElementById('flipButton').addEventListener('click', function() {
    let result = Math.random() < 0.5 ? 'heads.jpg' : 'tails.jpg'; // Assume you have 'heads.jpg' and 'tails.jpg'
    let img = document.getElementById('coinImage');
    img.src = result;
    img.alt = result.includes('heads') ? "Heads side of coin" : "Tails side of coin";
    img.hidden = false; // Show the image
});
