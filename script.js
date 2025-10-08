const emojis = ["🍒", "🍋", "🍇", "🍉", "⭐", "7️⃣"];
let balance = 100;

const slot1 = document.getElementById("slot1");
const slot2 = document.getElementById("slot2");
const slot3 = document.getElementById("slot3");
const balanceDisplay = document.getElementById("balance");
const message = document.getElementById("message");
const spinBtn = document.getElementById("spinBtn");

spinBtn.addEventListener("click", () => {
  if (balance < 10) {
    message.textContent = "Not enough credits! 💀";
    return;
  }

  balance -= 10;

  // Random spin
  const result = [
    emojis[Math.floor(Math.random() * emojis.length)],
    emojis[Math.floor(Math.random() * emojis.length)],
    emojis[Math.floor(Math.random() * emojis.length)]
  ];

  slot1.textContent = result[0];
  slot2.textContent = result[1];
  slot3.textContent = result[2];

  // Check if all three match
  if (result[0] === result[1] && result[1] === result[2]) {
    const win = 50;
    balance += win;
    message.textContent = `JACKPOT! You won ${win} credits! 🤑`;
  } else if (result[0] === result[1] || result[1] === result[2] || result[0] === result[2]) {
    const win = 20;
    balance += win;
    message.textContent = `Nice! You matched 2 and won ${win} credits! 😄`;
  } else {
    message.textContent = "No match! Try again! 🎲";
  }

  balanceDisplay.textContent = balance;
});
