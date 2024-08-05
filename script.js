document.addEventListener('DOMContentLoaded', () => {
    const targetDate = new Date('2024-08-09T00:00:00').getTime();
    
    const updateCountdown = () => {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            document.getElementById('countdown').innerHTML = "<h2>Chegou o grande dia!</h2>";
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

    setInterval(updateCountdown, 1000);
});
