const symbols = ["🍒", "🍋", "🍉", "⭐", "💎", "🔔"];
const spinButton = document.getElementById("spin");
const result = document.getElementById("result");
const reels = [
  document.getElementById("reel1"),
  document.getElementById("reel2"),
  document.getElementById("reel3")
];

spinButton.addEventListener("click", () => {
  spinButton.disabled = true;
  result.textContent = "Spinning... 🎲";

  let spins = 0;
  const spinInterval = setInterval(() => {
    reels.forEach(reel => {
      reel.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    });
    spins++;
    if (spins > 20) {
      clearInterval(spinInterval);
      spinButton.disabled = false;
      checkWin();
    }
  }, 100);
});

function checkWin() {
  const [a, b, c] = reels.map(r => r.textContent);
  if (a === b && b === c) {
    result.textContent = `🎉 You got ${a}${b}${c}! JACKPOT!`;
  } else {
    result.textContent = "Try again!";
  }
}
