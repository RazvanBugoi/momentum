let timeContainer = document.getElementById('time');
let inputField = document.getElementById('task');
let listOfTodos = document.getElementById('todoItems');
let user = document.getElementById("userName");
let greetingMessage = document.getElementById('greeting');

let currentTime = new Date();
let localTime = `${currentTime.getHours()}:${currentTime.getMinutes()}`;
timeContainer.innerHTML = localTime;

inputField.addEventListener("keypress", function onEvent(event) {
    if (event.key === 'Enter') {
        console.log(inputField.value);
        localStorage.setItem('name', `${inputField.value}`);
    }
})

function checkLocalStorage() {
    if (localStorage.getItem('name') == null) {
        user.setAttribute('placeholder', 'add your name here');
    } else {
        user.setAttribute("type", "hidden");
        greetingMessage.innerHTML = `Good evening, ${localStorage.getItem('name')}`;
    }
}

checkLocalStorage();



if (localStorage.getItem('name') == null) {
    user.value == 'Add your name here';
}
user.addEventListener("keypress", function onEvent(event) {
    if (event.key === "Enter") {
        localStorage.setItem('name', `${user.value}`)
        user.setAttribute("type", "hidden");
        greetingMessage.innerHTML = `Good evening, ${localStorage.getItem('name')}`;
    }
})