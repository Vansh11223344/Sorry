document.addEventListener('DOMContentLoaded', () => {
  const acceptedButton = document.getElementById('accepted');
  const rejectedButton = document.getElementById('rejected');
  const finalMessage = document.getElementById('final-message');
  const tryAgainMessage = document.getElementById('try-again-message');
  const apologyBox = document.querySelector('.apology-box');
  const backgroundMusic = document.getElementById('background-music');

  // Play background music
  backgroundMusic.play();

  // Handle "Sorry Accepted" button click
  acceptedButton.addEventListener('click', () => {
    apologyBox.classList.add('hidden');
    finalMessage.classList.remove('hidden');
  });

  // Handle "Sorry Rejected" button click
  rejectedButton.addEventListener('click', () => {
    tryAgainMessage.classList.remove('hidden');
    setTimeout(() => {
      tryAgainMessage.classList.add('hidden');
    }, 3000); // Hide the message after 3 seconds
  });
});