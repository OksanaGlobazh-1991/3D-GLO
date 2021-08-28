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

        const btnMenu = document.querySelector('.menu'), // сама кнопка 2
            menu = document.querySelector('menu'); // тег меню, в нем закрытие и список

        btnMenu.addEventListener('click', () => {
            if (!menu.style.transform || menu.style.transform === `translate(-100%)`) {
                menu.style.transform = `translate(0)`;
            } else {
                menu.style.transform = `translate(-100%)`;
            }
        });

        menu.addEventListener('click', event => {
            const target = event.target;
            if (target.closest('menu')) {
                menu.style.transform = `translate(-100%)`;
            }
        });
    };
    toggleMenu();

    //popup

    const togglePopUp = () => {
        const popup = document.querySelector('.popup'),
            popupBtn = document.querySelectorAll('.popup-btn'),
            popUpContent = document.querySelector('.popup-content');
        let count = 0;

        popupBtn.forEach(elem => {
            elem.addEventListener('click', () => {
                popup.style.display = 'block';

            });
        });

        popup.addEventListener('click', event => {
            let target = event.target;
            if (target.classList.contains('popup-close')) {
                popup.style.display = 'none';
            } else {
                target = target.closest('.popup-content');
                console.log(target);
                if (!target) {
                    popup.style.display = 'none';

                }
            }

        });

        let flyInterval;
        const modalWindow = () => {
            flyInterval = requestAnimationFrame(modalWindow);
            count++;
            if (count < 200) {
                popUpContent.style.left = count * 5 + 'px';
            } else {
                cancelAnimationFrame(flyInterval);
            }
            if (document.documentElement.clientWidth < 768) {
                cancelAnimationFrame(flyInterval);
            }

        };

        document.addEventListener('click', () => {
            flyInterval = requestAnimationFrame(modalWindow);
        });

    };
    togglePopUp();


    //табы

    const tabs = () => {
        const tabHeader = document.querySelector('.service-header'),
            tab = tabHeader.querySelectorAll('.service-header-tab'),
            tabContent = document.querySelectorAll('.service-tab');

        const toggleTabContent = index => {
            for (let i = 0; i < tabContent.length; i++) {
                if (index === i) {
                    tab[i].classList.add('active');
                    tabContent[i].classList.remove('d-none');
                } else {
                    tab[i].classList.remove('active');
                    tabContent[i].classList.add('d-none');
                }
            }
        };
        tabHeader.addEventListener('click', event => {
            let target = event.target;
            target = target.closest('.service-header-tab');
            if (target) {
                tab.forEach((item, i) => {
                    if (item === target) {
                        toggleTabContent(i);
                    }
                });
            }

        });

    };
    tabs();

});
