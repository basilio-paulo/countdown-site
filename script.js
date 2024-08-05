document.addEventListener('DOMContentLoaded', function() {
    const countdownDate = new Date('2024-08-09T00:00:00').getTime();
    const countdownElement = document.getElementById('countdown');
    const messageElement = document.getElementById('message');

    function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = countdownDate - now;

        if (timeLeft <= 0) {
            countdownElement.style.display = 'none';
            messageElement.classList.add('show');
            messageElement.style.display = 'block';
            showConfetti();
            return;
        }

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById('days').innerText = days;
        document.getElementById('hours').innerText = hours;
        document.getElementById('minutes').innerText = minutes;
        document.getElementById('seconds').innerText = seconds;
    }

    function showConfetti() {
        // Adiciona confetes à tela
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    }

    setInterval(updateCountdown, 1000);
});
