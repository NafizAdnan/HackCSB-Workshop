document.addEventListener('DOMContentLoaded', () => {
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');
    const newTaskInput = document.getElementById('new-task');

    addTaskBtn.addEventListener('click', addTask);
    newTaskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });

    function addTask() {
        const taskText = newTaskInput.value.trim();
        if (taskText !== '') {
            const li = document.createElement('li');
            li.textContent = taskText;
            li.addEventListener('click', () => {
                li.classList.toggle('completed');
            });

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = '✖';
            deleteBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                li.remove();
            });

            li.appendChild(deleteBtn);
            taskList.appendChild(li);
            newTaskInput.value = '';
        }
    }
});
