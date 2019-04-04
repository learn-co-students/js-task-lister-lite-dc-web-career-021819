document.addEventListener("DOMContentLoaded", () => {
  // your code here

  const taskForm = document.getElementById("create-task-form");
  const taskInput = document.getElementById("new-task-description");
  const tasks = document.getElementById("tasks");

  taskForm.addEventListener("submit", function(e) {
    const newTask = taskInput.value;
    taskInput.value = "";
    console.log(newTask);
    const item = document.createElement("li");
    item.textContent = newTask;
    tasks.appendChild(item);

    e.preventDefault();
  });
});
