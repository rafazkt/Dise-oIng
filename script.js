let editingTask = null;

function showTaskForm(task = null) {
  document.getElementById('taskForm').style.display = 'block';
  document.getElementById('taskInput').value = task ? task.textContent : '';
  document.getElementById('formTitle').textContent = task
    ? 'Editar Tarea'
    : 'Añadir Tarea';
  editingTask = task;
}

function saveTask() {
  const input = document.getElementById('taskInput');
  if (input.value.trim() === '') return;

  if (editingTask) {
    editingTask.textContent = input.value;
  } else {
    const li = document.createElement('li');
    li.className = 'task';
    li.innerHTML = `<span>${input.value}</span> <button onclick="showTaskForm(this.parentNode.firstChild)">Editar</button>`;
    document.getElementById('taskList').appendChild(li);
  }
  cancelTask();
}

function cancelTask() {
  document.getElementById('taskForm').style.display = 'none';
  document.getElementById('taskInput').value = '';
  editingTask = null;
}

// Accesibilidad: Permite navegación con Enter en el campo de entrada
document
  .getElementById('taskInput')
  .addEventListener('keydown', function (event) {
    if (event.key === 'Enter') saveTask();
  });
