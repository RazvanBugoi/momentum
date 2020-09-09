let timeContainer = document.getElementById('time');
let inputField = document.getElementById('task');


let currentTime = new Date();
let localTime = `${currentTime.getHours()}:${currentTime.getMinutes()}`;
timeContainer.innerHTML = localTime;

// inputField.onclick = changeBorder;

// function changeBorder() {
//     inputField.style.border = '2px solid #FF9800';
// }