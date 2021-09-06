const sendForm = () => {
  const errorMessage = 'Что то пошло не так...',
      loadMessage = 'Загрузка...',
      successMessage = 'Спасибо! Мы скоро с Вами свяжемся!';

  const forms = document.querySelectorAll('form');
  const statusMessage = document.createElement('div');
  statusMessage.style.cssText = 'font-size: 2rem;';
  forms.forEach(item => {
      item.addEventListener('submit', event => {
          event.preventDefault();
          item.appendChild(statusMessage);
          statusMessage.textContent = loadMessage;
          const formData = new FormData(item);
          // const body = {};
          // for (const val of formData.entries()) {
          //     body[val[0]] = val[1];
          // }
          postData(formData)
              .then(response => {
                  if (response.status !== 200) {
                      throw new Error('status network not 200');
                  }
                  statusMessage.textContent = successMessage;
              })
              .catch(error => {
                  statusMessage.textContent = errorMessage;
                  console.error(error);
              });

          [...item].forEach(input => {
              input.value = '';
          });
      });
  });

  const postData = formData => fetch('./server.php', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: formData,
      credentials: 'include'
  });

};

export default sendForm;