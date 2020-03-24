import './style.css';
import axios from 'axios';

//============AXIOS===================================================================================================================


const BASE_URL = 'https://pixabay.com/api/';
const KEY = '13689220-f8624404383f6a2586dfba74c';

axios.get(`${BASE_URL}?key=${KEY}`).then((res) => {
  const gallary = res.data.hits.reduce(
    (markup, img) => markup + `<img src="${img.webformatURL}" alt="">`,
    '',
  );
  document.body.insertAdjacentHTML('beforeend', gallary);
});

//============localStorage=============================================================================================================

// const testObj = {
//   string: 'text',
//   content: 2,
//   elem: ['el1', 'el2', 'el3'],
//   isLoading: false,
//   target: {
//     data: '2020-02-03',
//     unit: 10,
//   },
// };

// console.log(JSON.stringify(testObj));

// const receivedData = JSON.stringify(testObj);

// console.dir(JSON.parse(receivedData));

// document.cookie = 'user=Me';
// console.log(document.cookie);

// localStorage.setItem('testObj', JSON.stringify(testObj));
// const getResponse = JSON.parse(localStorage.getItem('testObj'));

// console.log(getResponse);

// localStorage.removeItem('testObj');
// localStorage.clear;

// try {
//   localStorage.setItem('testObj', JSON.stringify(testObj));
// } catch (error) {console.log(error)}

// try {
//   const getResponse = JSON.parse(localStorage.getItem('testObj'));
// } catch (error) {console.log(error)}
