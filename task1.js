const addButton = document.getElementById('addButton');
const taskInput = document.getElementById('task');
const taskList = document.getElementById('taskList');

addButton.addEventListener('click', addTask);

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const taskItem = document.createElement('li');
  taskItem.innerHTML = `
    <span>${taskText}</span>
    <button class="delete-button">Delete</button>
  `;
  
  taskList.appendChild(taskItem);
  taskInput.value = '';

  const deleteButton = taskItem.querySelector('.delete-button');
  deleteButton.addEventListener('click', () => {
    taskItem.remove();
  });
}
