let timeContainer = document.getElementById('time');
let inputField = document.getElementById('task');
let listOfTodos = document.getElementById('todoItems');
let user = document.getElementById("userName");
let greetingMessage = document.getElementById('greeting');
let changeNameBtn = document.getElementById('changeName');
let list = document.createElement('li');
// let editBtn = document.createElement('button');
// let deleteBtn = document.createElement('button');

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
    }, 60000);
}
startTime();

inputField.addEventListener("keypress", function onEvent(event) {
    if (event.key === 'Enter') {
        console.log(inputField.value);
        localStorage.setItem('todo', `${inputField.value}`);
        inputField.setAttribute('type', 'hidden');
        list.innerHTML = localStorage.getItem('todo');
        listOfTodos.appendChild(list);
        // editBtn.setAttribute('type', 'button');
        // deleteBtn.setAttribute('type', 'button');
        // editBtn.setAttribute('id', 'edit');
        // deleteBtn.setAttribute('id', 'delete');
        // editBtn.innerHTML = 'Edit';
        // deleteBtn.innerHTML = 'Delete';
        // list.appendChild(editBtn);
        // list.appendChild(deleteBtn);
    }
})

changeNameBtn.onclick = function deleteLocalStorage() {
    localStorage.removeItem('name');
    location.reload();
    checkLocalStorageName()
};

user.addEventListener("keypress", function onEvent(event) {
    if (event.key === "Enter") {
        localStorage.setItem('name', `${user.value}`)
        user.setAttribute("type", "hidden");
        greetingMessage.innerHTML = `Good evening, ${localStorage.getItem('name')}`;
    }
})

function checkLocalStorageName() {
    if (localStorage.getItem('name') == null) {
        user.setAttribute('placeholder', 'add your name here');
    } else {
        user.setAttribute("type", "hidden");
        greetingMessage.innerHTML = `Good evening, ${localStorage.getItem('name')}`;
    }
}

checkLocalStorageName();

function checkLocalStorageTodo() {
    if (localStorage.getItem('todo') == null) {
        inputField.setAttribute('placeholder', 'Enter Task Here');
    } else {
        inputField.setAttribute('type', 'hidden');
        list.innerHTML = localStorage.getItem('todo');
        listOfTodos.appendChild(list);
    }
}

checkLocalStorageTodo();

list.addEventListener('dblclick', function(event) {
    localStorage.removeItem('todo');
    location.reload()
})