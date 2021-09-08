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
        if (count < 50) {
            popUpContent.style.left = count + '%';
        } else {
            cancelAnimationFrame(flyInterval);
        }
        if (popup.clientWidth < 768) {
            popUpContent.style.left = '50%';
            cancelAnimationFrame(flyInterval);
        }

    };

    document.addEventListener('click', () => {
        flyInterval = requestAnimationFrame(modalWindow);
    });

};

export default togglePopUp;
