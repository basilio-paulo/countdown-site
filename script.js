document.addEventListener('DOMContentLoaded', () => {
    const targetDate = new Date('2024-08-09T00:00:00').getTime();

    const updateCountdown = () => {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            document.body.classList.add('celebration');
            document.querySelector('.container').innerHTML = `
                <h1>Parabéns! Chegou o grande dia!</h1>
                <div class="confetti">${generateConfetti()}</div>
            `;
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days-value').innerText = days;
        document.getElementById('hours-value').innerText = hours;
        document.getElementById('minutes-value').innerText = minutes;
        document.getElementById('seconds-value').innerText = seconds;
    };

    const generateConfetti = () => {
        let confettiHTML = '';
        for (let i = 0; i < 100; i++) {
            const left = Math.random() * 100;
            const top = Math.random() * 100;
            const delay = Math.random() * 2;
            const duration = Math.random() * 5 + 5;
            const size = Math.random() * 10 + 5;
            confettiHTML += `
                <div class="piece" style="
                    left: ${left}vw;
                    top: ${top}vh;
                    background-color: hsl(${Math.random() * 360}, 100%, 50%);
                    width: ${size}px;
                    height: ${size}px;
                    animation-delay: ${delay}s;
                    animation-duration: ${duration}s;
                "></div>
            `;
        }
        return confettiHTML;
    };

    setInterval(updateCountdown, 1000);
});
