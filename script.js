document.addEventListener('DOMContentLoaded', () => {
  const birthDateInput = document.getElementById('birth-date');
  const submitDateButton = document.getElementById('submit-date');
  const dateCheckContainer = document.getElementById('date-check');
  const mainContent = document.getElementById('main-content');
  const errorMessage = document.getElementById('error-message');
  const acceptedButton = document.getElementById('accepted');
  const rejectedButton = document.getElementById('rejected');
  const finalMessage = document.getElementById('final-message');
  const tryAgainMessage = document.getElementById('try-again-message');
  const backgroundMusic = document.getElementById('background-music');

  // Handle date submission
  submitDateButton.addEventListener('click', () => {
    const birthDate = new Date(birthDateInput.value);
    const targetDate = new Date('2003-11-11'); // The target date (11/11/2003)
  
    if (
      birthDate.getFullYear() === targetDate.getFullYear() &&
      birthDate.getMonth() === targetDate.getMonth() &&
      birthDate.getDate() === targetDate.getDate()
    ) {
      dateCheckContainer.classList.add('hidden');
      mainContent.classList.remove('hidden');
      backgroundMusic.play();
    } else {
      errorMessage.classList.remove('hidden');
    }
  });
  

  // Handle "Sorry Accepted" button click
  acceptedButton.addEventListener('click', () => {
    document.querySelector('.apology-box').classList.add('hidden');
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
