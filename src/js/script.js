let timeContainer = document.getElementById('time');
let inputField = document.getElementById('task');
let listOfTodos = document.getElementById('todoItems');
let user = document.getElementById("userName");
let greetingMessage = document.getElementById('greeting');
let changeNameBtn = document.getElementById('changeName');
let list = document.createElement('li');

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function startTime() {
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    hours = checkTime(hours);
    minutes = checkTime(minutes);
    timeContainer.innerHTML = hours + ":" + minutes;
    const timer = setTimeout(function() {
        startTime()
    }, 1000);
}
startTime();

inputField.addEventListener("keypress", function onEvent(event) {
    if (event.key === 'Enter') {
        console.log(inputField.value);
        localStorage.setItem('todo', `${inputField.value}`);
        inputField.setAttribute('type', 'hidden');
        list.innerHTML = localStorage.getItem('todo');
        listOfTodos.appendChild(list);
    }
})

changeNameBtn.onclick = function deleteLocalStorage() {
    localStorage.clear();
    location.reload();
    checkLocalStorage()
};

user.addEventListener("keypress", function onEvent(event) {
    if (event.key === "Enter") {
        localStorage.setItem('name', `${user.value}`)
        user.setAttribute("type", "hidden");
        greetingMessage.innerHTML = `Good evening, ${localStorage.getItem('name')}`;
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