function countTimer(deadline) {
    const timerHours = document.querySelector('#timer-hours'),
        timerMinutes = document.querySelector('#timer-minutes'),
        timerSeconds = document.querySelector('#timer-seconds');

    function getTimeRemaining() {

        const dateStop = new Date(deadline).getTime(),
            dateNow = new Date().getTime(),
            timeRemaining = (dateStop - dateNow) / 1000,
            seconds = Math.floor(timeRemaining % 60),
            minutes = Math.floor((timeRemaining / 60) % 60),
            hours = Math.floor(timeRemaining / 60 / 60);
        return { timeRemaining, hours, minutes, seconds };
    }

    function updateClock() {
        const timer = getTimeRemaining();

        timerHours.textContent = timer.hours;
        if (timer.hours > 0 && timer.hours < 10) {
            timerHours.textContent = '0' + timer.hours;
        }
        timerMinutes.textContent = timer.minutes;
        if (timer.minutes > 0 && timer.minutes < 10) {
            timerMinutes.textContent = '0' + timer.minutes;
        }
        timerSeconds.textContent = timer.seconds;
        if (timer.seconds > 0 && timer.seconds < 10) {
            timerSeconds.textContent = '0' + timer.seconds;
        }
        if (timer.timeRemaining < 0) {
            clearInterval(idInterval);
            timerHours.textContent = '00';
            timerMinutes.textContent = '00';
            timerSeconds.textContent = '00';
        }
    }
    updateClock();
};

export default countTimer;


