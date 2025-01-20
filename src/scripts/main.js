document.addEventListener("DOMContentLoaded", () => {
    const countdownElement = document.getElementById("countdown");
    function updateCountdown() {
    const nextBirthday = new Date("November 10, 2025 00:00:00").getTime();
    const now = new Date().getTime();
    const timeLeft = nextBirthday - now;
    if (timeLeft <= 0) {
        countdownElement.innerText = "Feliz Aniversário!";
        return;
    }
      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    countdownElement.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
    setInterval(updateCountdown, 1000);
});