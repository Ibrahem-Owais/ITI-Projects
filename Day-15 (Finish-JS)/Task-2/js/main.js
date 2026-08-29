const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

// LET TO GET THE TASKS & LOAD FROM LOCALSTORAGE
let tasks = JSON.parse(localStorage.getItem('myTasks')) || [];

// FUNCTION TO SAVE TASKS TO LOCALSTORAGE
function saveToLocalStorage() {
    localStorage.setItem('myTasks', JSON.stringify(tasks));
}

// RENDER TASKS IN DOM
function renderTasks() {
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center px-0 py-2 border-bottom';
        li.setAttribute('data-index', index);

        li.innerHTML = `
            <span>${task}</span>
            <div>
                <button class="btn btn-sm text-warning p-0 border-0 me-2 edit-btn" type="button">
                    <i class="fa-solid fa-pen-to-square"></i>
                </button>
                <button class="btn btn-sm text-secondary p-0 border-0 delete-btn" type="button">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </div>
        `;

        taskList.appendChild(li);
    });
}

// FUNCTION TO ADD NEW TASK 
function addTask() {
    const taskText = taskInput.value.trim();

    // CHECK FOR INPUT EMPTY OR NO
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    // TO ADD A NEW TASK IN LOCALSTORAGE
    tasks.push(taskText);
    saveToLocalStorage();
    renderTasks();

    taskInput.value = '';
}

// ADD TASK
addBtn.addEventListener('click', addTask);
// TO ADD TASK WHEN I PRESS ENTER
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});


taskList.addEventListener('click', (e) => {
    const target = e.target;
    const item = target.closest('li');

    if (!item) return;
    const index = item.getAttribute('data-index');

    // DELETE TASK
    if (target.classList.contains('fa-trash-can') || target.closest('.delete-btn')) {
        tasks.splice(index, 1);
        saveToLocalStorage();
        renderTasks();
    }

    // EDIT TASK
    if (target.classList.contains('fa-pen-to-square') || target.closest('.edit-btn')) {
        const updatedText = prompt('Edit your task:', tasks[index]);

        if (updatedText !== null && updatedText.trim() !== '') {
            tasks[index] = updatedText.trim();
            saveToLocalStorage();
            renderTasks();
        }
    }
});

renderTasks();