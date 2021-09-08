
const sendForm = () => {
    const errorMessage = 'Что то пошло не так...',
        loadMessage = 'Загрузка...',
        successMessage = 'Спасибо! Мы скоро с Вами свяжемся!';

    const forms = document.querySelectorAll('form');
    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font-size: 2rem; color: white';
    let postData = 0;

    forms.forEach(item => {
        item.addEventListener('submit', event => {
            event.preventDefault();
            item.appendChild(statusMessage);
            statusMessage.textContent = loadMessage;
            const formData = new FormData(item);
            [...item].forEach(input => {
                input.value = '';
            });

            postData(formData)
                .then(response => {
                    if (response.status !== 200) {
                        throw new Error('status network not 200');
                    }
                    console.log(response);
                    statusMessage.textContent = successMessage;
                })
                .catch(error => {
                    statusMessage.textContent = errorMessage;
                    console.error(error);
                });
        });
    });
    postData = formData => fetch('./server.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
        credentials: 'include'
    });
};

export default sendForm;
