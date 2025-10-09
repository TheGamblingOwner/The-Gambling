const emojis = ["🍒", "🍋", "🍇", "🍉", "⭐", "7️⃣"];
let balance = 100;
let winStreak = 0;

const slotEls = [document.getElementById("slot1"), document.getElementById("slot2"), document.getElementById("slot3")];
const balanceDisplay = document.getElementById("balance");
const message = document.getElementById("message");
const spinBtn = document.getElementById("spinBtn");
const betSelect = document.getElementById("bet");

const spinSound = document.getElementById("spinSound");
const winSound = document.getElementById("winSound");


spinBtn.addEventListener("click", () => {
  const bet = parseInt(betSelect.value);
  if (balance < bet) {
    message.textContent = "Not enough credits! 💀";
    return;
  }

  balance -= bet;
  balanceDisplay.textContent = balance;
  message.textContent = "Spinning...";
  spinSound.play();

  // Animate spin
  slotEls.forEach(s => s.classList.add("spin"));

  setTimeout(() => {
    slotEls.forEach(s => s.classList.remove("spin"));

    const result = [
      emojis[Math.floor(Math.random() * emojis.length)],
      emojis[Math.floor(Math.random() * emojis.length)],
      emojis[Math.floor(Math.random() * emojis.length)]
    ];

    slotEls.forEach((s, i) => {
      s.textContent = result[i];
      s.classList.remove("win");
    });

    let win = 0;
    if (result[0] === result[1] && result[1] === result[2]) {
      win = bet * 5;
      winStreak++;
      message.textContent = `🎉 JACKPOT! You won ${win} credits! (x${winStreak} streak bonus!)`;
      winSound.play();
      slotEls.forEach(s => s.classList.add("win"));
    } else if (result[0] === result[1] || result[1] === result[2] || result[0] === result[2]) {
      win = bet * 2;
      winStreak++;
      message.textContent = `😄 Nice match! +${win} credits! (x${winStreak} streak)`;
      winSound.play();
      slotEls.forEach((s, i) => {
        if (result[i] === result[(i + 1) % 3]) s.classList.add("win");
      });
    } else {
      message.textContent = "💨 No match! Try again!";
      
      winStreak = 0;
    }

    balance += win;
    balanceDisplay.textContent = balance;
  }, 1500);
});
