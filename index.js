const todoInput = document.querySelector('#todoInput')
const addTaskBtn = document.querySelector('#addTask')
const taskList = document.querySelector('#taskList')

addTaskBtn.addEventListener('click', function() {
    if(todoInput.value === "") {
        alert("Please enter a task");
    } else {
        let li = document.createElement('li');
        li.innerHTML = todoInput.value;
        taskList.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    todoInput.value = "";
})

taskList.addEventListener('click', function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("done");
    } else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
}, false)


