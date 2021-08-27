window.addEventListener('DOMContentLoaded', () => {

    //Timer
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
    }
    const idInterval = setInterval(countTimer, 1000, '27 august 2021');


    //menu

    const toggleMenu = () => {

        const btnMenu = document.querySelector('.menu'),
            menu = document.querySelector('menu'),
            closeBtn = document.querySelector('.close-btn'),
            menuItems = document.querySelectorAll('ul>li');


        const handlerMenu = () => {
            menu.classList.toggle('active-menu');
        };
        btnMenu.addEventListener('click', handlerMenu);
        closeBtn.addEventListener('click', handlerMenu);

        menuItems.forEach(elem => elem.addEventListener('click', handlerMenu));
    };

    toggleMenu();

    //popup

    const togglePopUp = () => {
        const popup = document.querySelector('.popup'),
            popupBtn = document.querySelectorAll('.popup-btn'),
            popUpClose = document.querySelector('.popup-close'),
            popUpContent = document.querySelector('.popup-content');
            let count = 0;

        popupBtn.forEach((elem) => {
            elem.addEventListener('click', () => {
                popup.style.display = 'block';

            });
        });

        popUpClose.addEventListener('click', () => {
            popup.style.display = 'none';

        });

        let flyInterval;
        let modalWindow = () => {
            flyInterval = requestAnimationFrame(modalWindow);
            count ++;
            if (count < 200) {
                popUpContent.style.left = count * 5 + 'px';
            } else {
                cancelAnimationFrame(flyInterval);
            };
            if (document.documentElement.clientWidth < 768) {
                cancelAnimationFrame(flyInterval);
            };
        };

        document.addEventListener('click', () => {
             flyInterval = requestAnimationFrame(modalWindow);
        });

    };
    togglePopUp();

});
