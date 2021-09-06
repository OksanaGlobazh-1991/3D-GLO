const valide = () => {
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
};

export default valide;