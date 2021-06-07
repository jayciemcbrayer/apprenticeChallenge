//Selectors
const taskInput = document.querySelector(".task-input");
const taskButton = document.querySelector(".task-btn");
const taskList = document.querySelector(".task-list");

//Event Listeners
taskButton.addEventListener('click', addTask);
taskList.addEventListener('click', deleteTask);
document.addEventListener("DOMContentLoaded", getTasks);

//Functions

//Add new tasks from input field to list
function addTask(event) {
  //Prevents form from submitting
  event.preventDefault();
  //Create tasks <div>
  const tasksDiv = document.createElement('div');
  tasksDiv.classList.add('tasks');
  //Create tasks list <li>
  const newTask = document.createElement('li');
  newTask.innerText = taskInput.value;
  newTask.classList.add('task-item');
  tasksDiv.appendChild(newTask); //This puts the new task list item into the div
      //Need to edit it to where they appear at the top of the list instead of the bottom*
  //Add task to local storage
  saveTasksOnLocal(taskInput.value);
  //Delete button
  const deleteButton = document.createElement('button');
  deleteButton.innerText = "Delete";
  deleteButton.classList.add("delete-btn");
  tasksDiv.appendChild(deleteButton); //This adds the delete buttons into the div
  //Append together with the task list
  taskList.appendChild(tasksDiv);
  //Clear task input value
  taskInput.value = "";
}

//Remove tasks from list
//Delete Tasks
function deleteTask(e) {
  const task = e.target.previousElementSibling.textContent;
  //Delete task
   const item = e.target.parentElement;
    item.remove();
    deleteTaskFromStorage(task);
};

function saveTasksOnLocal(task) {
  //Checks to see if item already exsists in local storage
  let tasks;
  if (localStorage.getItem('tasks') === null) { //If it's not already stored, it adds the item to local storage
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks')); //loads saved data from local storage to the task list on the page
  }
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function getTasks() {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.forEach(task => {
  //Renders tasks div for items in storage
  const tasksDiv = document.createElement('div');
  tasksDiv.classList.add('tasks');
  //Renders tasks list for items in storage
  const newTask = document.createElement('li');
  newTask.innerText = task;
  newTask.classList.add('task-item');
  tasksDiv.appendChild(newTask); //This puts the new task list item into the div
  //Delete button for each item in storage
  const deleteButton = document.createElement('button');
  deleteButton.innerText = "Delete";
  deleteButton.classList.add("delete-btn");
  tasksDiv.appendChild(deleteButton); //This adds the delete buttons into the div
  //Append together with the task list
  taskList.appendChild(tasksDiv);
  });
}

function deleteTaskFromStorage(task) {
  //Checks to see if item already exsists in local storage
  let tasks;
  if (localStorage.getItem('tasks') === null) { //If it's not already stored, it adds the item to local storage
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks')); //loads saved data from local storage to the task list on the page
  }
  //console.log(tasks.indexOf(task));
  //console.log(tasks.splice(tasks.indexOf(task)));
  //const taskIndex = task.children[0];
  tasks.splice(tasks.indexOf(task), 1); //Tells what position of the element to remove and how many that you want to remove
  localStorage.setItem('tasks', JSON.stringify(tasks));
  //storage.removeItem(task);
}

/* 
Sortby or Orderby ? to make newest list items appear at the top of the list
unshift?

store item , filter method, access key for local storage removal
target the
*/