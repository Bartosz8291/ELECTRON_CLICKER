const { ipcRenderer } = require('electron');

let score = 0;

// Update the score display
function updateScore() {
    const scoreElement = document.getElementById('score');
    scoreElement.textContent = score;
}

// Increase score when the button is clicked
document.getElementById('clickButton').addEventListener('click', () => {
    score++;
    updateScore();
});

// Send score to main process when the window is closed
window.addEventListener('beforeunload', () => {
    ipcRenderer.send('score', score);
});
