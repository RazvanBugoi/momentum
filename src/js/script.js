let timeContainer = document.getElementById('time');
let inputField = document.getElementById('task');
let listOfTodos = document.getElementById('todoItems');
let user = document.getElementById("userName");
let greetingMessage = document.getElementById('greeting');
let changeNameBtn = document.getElementById('changeName');
let list = document.createElement('li');
let todoInput = document.getElementById('todo-input');

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

todoInput.addEventListener("keypress", function onEvent(event) {
    if (event.key === 'Enter') {
        console.log(todoInput.innerHTML);
        localStorage.setItem('todo', `${todoInput.innerHTML}`);
        // inputField.style.display = 'none';
        todoInput.innerHTML = localStorage.getItem('todo');
        // document.getElementById('checkbox').appendChild(todoInput);
    }
})


user.addEventListener("keypress", function onEvent(event) {
    if (event.key === "Enter") {
        localStorage.setItem('name', `${user.innerHTML}`)
        user.setAttribute("contenteditable", "false");
        user.innerHTML = `${localStorage.getItem('name')}.`;
        user.style.border = 0;
    }
})

function checkLocalStorageName() {
    if (localStorage.getItem('name') == null) {
        user.setAttribute('placeholder', 'name');
    } else {
        greetingMessage.innerHTML = 'Good evening,' + ' ';
        user.innerHTML = `${localStorage.getItem('name')}.`;
        user.setAttribute('contenteditable', 'false');
        user.style.border = 0;
        greetingMessage.appendChild(user)
    }
}

checkLocalStorageName();

function checkLocalStorageTodo() {
    if (localStorage.getItem('todo') == null) {
        todoInput.innerHTML;
    } else {
        // inputField.style.display = 'none';
        todoInput.innerHTML = localStorage.getItem('todo');
        // document.getElementById('checkbox').appendChild(todoInput);
    }
}

checkLocalStorageTodo();

list.addEventListener('dblclick', function(event) {
    localStorage.removeItem('todo');
    location.reload()
})

user.addEventListener('dblclick', (event) => {
    localStorage.removeItem('name');
    user.setAttribute('contenteditable', 'true');
    user.style.borderBottom = '2px solid #ffffff';
    checkLocalStorageName();
})