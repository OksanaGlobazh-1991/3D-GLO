const toggleMenu = () => {

    const  menu = document.querySelector('menu'); // тег меню, в нем закрытие и список

    document.addEventListener('click', event => {
        const target = event.target;
        if (target.closest('a')) {
            menu.style.transform = `translate(-100%)`;
        }
        if (target.closest('main')) {
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

export default toggleMenu;
