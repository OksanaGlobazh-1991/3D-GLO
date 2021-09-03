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
    const idInterval = setInterval(countTimer, 1000, '31 august 2021');


    //menu

    const toggleMenu = () => {

        const btnMenu = document.querySelector('.menu'), // сама кнопка 2
            menu = document.querySelector('menu'); // тег меню, в нем закрытие и список

        document.addEventListener('click', event => {
            const target = event.target;
            if (target.closest('menu')) {
                menu.style.transform = `translate(-100%)`;
            }
            if (target.closest('.menu')) {
                if (!menu.style.transform || menu.style.transform === `translate(-100%)`) {
                    menu.style.transform = `translate(0)`;
                    menu.classList.toggle('active-menu');
                } else {
                    menu.style.transform = `translate(-100%)`;
                }
            }
            if (!target) {
                menu.style.display = 'none';
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


    //пишем слайдер

    const slider = () => {

        const slide = document.querySelectorAll('.portfolio-item'),
            btn = document.querySelectorAll('.portfolio-btn'),
            slider = document.querySelector('.portfolio-content');

        const newElem = () => {

            const portfolioDots = document.querySelector('.portfolio-dots');
            slide.forEach((item, i) => {
                item = document.createElement('li');
                item.className = 'dot';
                if (i === 0) {
                    item = document.createElement('li');
                    item.className = 'dot dot-active';
                }
                portfolioDots.append(item);
            });
            dot = document.querySelectorAll('.dot');
        };
        newElem();

        let currentSlide = 0, //номер слайда
            interval;

        const prevSlide = (elem, index, strClass) => {
            elem[index].classList.remove(strClass);

        };

        const nextSlide = (elem, index, strClass) => {
            elem[index].classList.add(strClass);

        };

        const autoPlaySlide = () => {

            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');
            currentSlide++;
            if (currentSlide >= slide.length) {
                currentSlide = 0;
            }
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');
        };

        const startSlide = (time = 3000) => {
            interval = setInterval(autoPlaySlide, time);
        };

        const stopSlide = () => {
            clearInterval(interval);
        };
        slider.addEventListener('click', event => {
            event.preventDefault();

            const target = event.target;

            if (!target.matches('.portfolio-btn, .dot')) {
                return;
            }
            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');
            if (target.matches('#arrow-right')) {
                currentSlide++;
            } else if (target.matches('#arrow-left')) {
                currentSlide--;
            } else if (target.matches('.dot')) {
                dot.forEach((elem, index) => {
                    if (elem === target) {
                        currentSlide = index;
                    }
                });
            }

            if (currentSlide >= slide.length) {
                currentSlide = 0;
            }

            if (currentSlide < 0) {
                currentSlide = slide.length - 1;
            }
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');
        });

        slider.addEventListener('mouseover', event => {
            if (event.target.matches('.portfolio-btn') ||
            event.target.matches('.dot')) {
                stopSlide();
            }
        });

        slider.addEventListener('mouseout', event => {
            if (event.target.matches('.portfolio-btn') ||
            event.target.matches('.dot')) {
                startSlide();
            }
        });

        startSlide(1500);
    };

    slider();


    //валидация

    const commandPhoto = document.querySelectorAll('.command__photo');

    commandPhoto.forEach(item => {
        let photo;

        item.addEventListener('mouseover', event => {
            photo = event.target.src;
            event.target.src = event.target.dataset.img;
        });
        item.addEventListener('mouseout', event => {
            event.target.src = photo;
        });
    });

    const formName = document.querySelectorAll('input[name="user_name"]');

    formName.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/[^а-яё ]+/g, '');
        });
        item.addEventListener('blur', () => {
            item.value = item.value.replace(/[^а-яё\ ]+/gi, '');
            item.value = item.value.trim();
            item.value = item.value.replace(/\s+/g, ' ');
            item.value = item.value.charAt(0).toUpperCase() + item.value.slice(1);

        });
    });



    const formMessage = document.getElementById('form2-message');
    formMessage.addEventListener('input', () => {
        formMessage.value = formMessage.value.replace(/[^?!,.а-яА-ЯёЁ0-9\s]+/g, '');
    });
    formMessage.addEventListener('blur', () => {
        formMessage.value = formMessage.value.replace(/[^\?\!\,\.\а-яА-ЯёЁ0-9\s]+/gi, '');
        formMessage.value = formMessage.value.trim();
        formMessage.value = formMessage.value.replace(/\s+/g, ' ');
    });


    const formEmail = document.querySelectorAll('.form-email');

    formEmail.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/[^a-z-@_.!~*']+/g, '');
        });
        item.addEventListener('blur', () => {
            item.value = item.value.replace(/[^a-z\-\@\_\.\!\~\*\']+/gi, '');
            item.value = item.value.trim();
            item.value = item.value.replace(/\s+/g, ' ');
        });
    });



    const formPhone = document.querySelectorAll('.form-phone');

    formPhone.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/[^0-9+]+/g, '');
        });
        item.addEventListener('blur', () => {
            item.value = item.value.replace(/[^0-9\+]+/gi, '');
            item.value = item.value.trim();
            item.value = item.value.replace(/\s+/g, ' ');
        });

    });



    //калькулятор

    const calc = (price = 100) => {

        const calcBlock = document.querySelector('.calc-block'),
            input = calcBlock.querySelectorAll('input'),
            calcType = document.querySelector('.calc-type'),
            calcSquare = document.querySelector('.calc-square'),
            calcDay = document.querySelector('.calc-day'),
            calcCount = document.querySelector('.calc-count'),
            totalValue = document.getElementById('total');

        const countSum = () => {

            let total = 0,
                countValue = 1,
                dayValue = 1;

            const typeValue = calcType.options[calcType.selectedIndex].value,
                squareValue = +calcSquare.value;

            if (calcCount.value > 1) {
                countValue += (calcCount.value - 1) / 10;
            }

            if (calcDay.value && calcDay.value < 5) {
                dayValue *= 2;
            } else if (calcDay.value && calcDay.value < 10) {
                dayValue *= 1.5;
            }


            if (typeValue && squareValue) {
                total = price * typeValue * squareValue * countValue * dayValue;
            }

            totalValue.textContent = total;
        };

        input.forEach(item => {
            item.addEventListener('input', () => {

                item.value = item.value.replace(/[^0-9]/g, '');
            });
        });

        calcBlock.addEventListener('change', event => {
            const target = event.target;
            if (target.matches('.calc-type') || target.matches('.calc-square') ||
                target.matches('.calc-day') || target.matches('.calc-count')) {
                countSum();
            }
        });
    };
    calc(100);

    //send-ajax-form

    const sendForm = () => {

        const errorMessage = 'Что то пошло не так...',
            loadMessage = 'Загрузка...',
            successMessage = 'Спасибо! Мы скоро с Вами свяжемся!';

        const forms = document.querySelectorAll('form');
        const statusMessage = document.createElement('div');
        statusMessage.style.cssText = 'font-size: 2rem;';
        let body;
        forms.forEach(item => {
            item.addEventListener('submit', event => {
                event.preventDefault();
                item.appendChild(statusMessage);
                statusMessage.textContent = loadMessage;
                const formData = new FormData(item);
                const body = {};
                for (const val of formData.entries()) {
                    body[val[0]] = val[1];
                }
                postData(body, () => {
                    statusMessage.textContent = successMessage;
                }, error => {
                    statusMessage.textContent = errorMessage;
                    console.error(error);
                });
                [...item].forEach(input => {
                    input.value = '';
                });
            });
        });

        const postData = body => {
            new Promise((resolve, reject) => {
                const request = new XMLHttpRequest();
                request.open('POST', './server.php');
                request.addEventListener('readystatechange', () => {
                    if (request.readyState !== 4) {
                        return;
                    }
                    if (request.status === 200) {
                        resolve(body);
                    } else {
                        reject(request.status);
                    }
                });

                request.setRequestHeader('Content-Type', 'multipart/form-data');
                request.send(JSON.stringify(body));
            });
        };
        postData(body)
            .then(statusMessage)
            .catch(error => console.error(error));

    };
    sendForm();


});
