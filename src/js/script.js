let timeContainer = document.getElementById('time');
let inputField = document.getElementById('task');
let listOfTodos = document.getElementById('todoItems');

let currentTime = new Date();
let localTime = `${currentTime.getHours()}:${currentTime.getMinutes()}`;
timeContainer.innerHTML = localTime;