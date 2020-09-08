let timeContainer = document.getElementById('time');


let currentTime = new Date();
let localTime = `${currentTime.getHours()}:${currentTime.getMinutes()}`;
time.innerHTML = localTime;