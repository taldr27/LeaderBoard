// Importing the css file and the js modules

import './index.css';
import add from './modules/add.js';
import refresh from './modules/refresh.js';

document.querySelector('#score-form').addEventListener('submit', add);
document.querySelector('#refreshBtn').addEventListener('click', refresh);
window.onload = refresh();

// Creating a new game ID
const data = { name: 'game' };

fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
  method: 'POST',
  body: JSON.stringify(data),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
}).then((response) => response.json())
  .then((json) => console.log(json));
