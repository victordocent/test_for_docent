// countdown.js

// Target date: March 31, 2025
const targetDate = new Date("2025-03-31T00:00:00Z");

function updateCountdown() {
  // Current date and time
  const currentDate = new Date();

  // Calculate the number of working days
  let workingDays = 0;
  let date = new Date(currentDate);

  while (date <= targetDate) {
    const dayOfWeek = date.getUTCDay();
    if (dayOfWeek !== 0 && dayOfWeek !== 6) { // Exclude Sundays (0) and Saturdays (6)
      workingDays++;
    }
    date.setUTCDate(date.getUTCDate() + 1);
  }

  // Display the countdown
  const countdownElement = document.getElementById("countdown");
  countdownElement.textContent = `Working Days Left: ${workingDays}`;
}

// Initial update
updateCountdown();

// Update the countdown every second
setInterval(updateCountdown, 1000);
