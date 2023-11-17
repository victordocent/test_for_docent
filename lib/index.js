// countdown.js

// Target date: April 26, 2023
const targetDate = new Date("2023-04-26T00:00:00Z");

function updateCountdown() {
  // Current date and time
  const currentDate = new Date();

  // Calculate the time difference
  const timeDifference = currentDate - targetDate;

  // Calculate the number of days and hours
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  // Display the countdown
  const countdownElement = document.getElementById("countdown");
  countdownElement.textContent = `Days: ${days}, Hours: ${hours}, Minutes: ${minutes}, Seconds: ${seconds}`;
}

// Initial update
updateCountdown();

// Update the countdown every second
setInterval(updateCountdown, 1000);
