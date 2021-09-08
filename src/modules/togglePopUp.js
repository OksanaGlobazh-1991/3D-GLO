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

    let animate = false;
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

    const resetModal = function() {
        if (animate) {
            cancelAnimationFrame(flyInterval);
            popUpContent.style.left = 0;
            count = 0;
            animate = false;
        } else {
            popUpContent.style.left = 0;
            count = 0;
        }
    };

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
        if (target) {
            resetModal();
        }
    });

    document.addEventListener('click', () => {
        if (!animate) {
            flyInterval = requestAnimationFrame(modalWindow);
            animate = true;
        } else {
            animate = false;
            cancelAnimationFrame(flyInterval);
        }
    });

};

export default togglePopUp;
