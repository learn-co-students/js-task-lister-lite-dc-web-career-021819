document.addEventListener("DOMContentLoaded", () => {

  let form = getForm();

  form.addEventListener('submit', formSubmissionEventHandler);

});

function getInputField(){
  return document.getElementById('new-task-description');
}

function getForm(){
  return document.getElementById('create-task-form');
}

function getTasksList(){
  return document.getElementById("tasks");
}

function formSubmissionEventHandler(event){
  event.preventDefault();
  let inputField = getInputField();
  let taskList = getTasksList();
  let newItem = document.createElement("li");
  let button = document.createElement("button");

  button.addEventListener("click", deleteButtonEventHandler);
  button.innerText = "X"

  newItem.innerText = inputField.value;
  inputField.value = "";

  newItem.appendChild(button);
  taskList.appendChild(newItem);
}

function deleteButtonEventHandler(event){
  buttonNode = event.target;
  item = buttonNode.parentNode;

  item.removeChild(buttonNode);
  item.remove();
}
