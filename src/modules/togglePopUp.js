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
        if (count < 100) {
            popUpContent.style.left = count + 'px';
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

export default togglePopUp;
