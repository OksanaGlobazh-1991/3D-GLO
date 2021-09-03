const outPut = document.getElementById('output');

const getData = (url) => {

  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
  request.open('GET', url);
  request.addEventListener('readystatechange', () => {
    if (request.readyState !== 4) {
      return;
    }
    if (request.status === 200) {
      const response = JSON.parse(request.responseText);
      resolve(response);
    } else {
      reject(request.statusText);
    }
  });
  request.send();
  });
  
};

const outputPhotos = (data) => {
console.log(data);
  data.forEach(item => {
    output.insertAdjacentHTML('beforebegin', `<h4>${item.title}</h4>
                              <img src="${item.thumbnailUrl}" alt="${item.title}">`);
  });
};

const urlPhotos = 'https://jsonplaceholder.typicode.com/photos';

const oneImg = getData('https://jsonplaceholder.typicode.com/photos/1');
const twoImg = getData('https://jsonplaceholder.typicode.com/photos/2');
const threeImg = getData('https://jsonplaceholder.typicode.com/photos/3');


Promise.all([oneImg, twoImg, threeImg])
    .then(outputPhotos)
    .catch(error => console.log(error));
 
// Promise.all([oneImg, twoImg]);

// getData(urlPhotos)
//     .then(outputPhotos)
//     .catch(error => console.error(error));