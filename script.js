//Selectors
const taskInput = document.querySelector(".task-input");
const taskButton = document.querySelector(".task-btn");
const taskList = document.querySelector(".task-list");

//Event Listeners
taskButton.addEventListener('click', addTask);
taskList.addEventListener('click', deleteTask);

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
  //Delete button
  const deleteButton = document.createElement('button');
  deleteButton.innerText = "Delete";
  deleteButton.classList.add("delete-btn");
  tasksDiv.appendChild(deleteButton); //This adds the delete buttons into the div
  //Append together with the task list
  taskList.appendChild(tasksDiv);
  //Clear task input value
  taskInput.value = "";
//Add tasks to local storage
  //storage.addItem()
}

//Remove tasks from list
//Delete Tasks
function deleteTask(e) {
  const task = e.target;
  //Delete task
  if (task.classList[0] === 'delete-btn') {
    const items = task.parentElement;
    items.remove();
  }
  //storage.removeItem()
};



/* local storage is key, value pairs: in this  instance would I? 
key = task
value = task input submitted
Input:
setItem();

Delete:
removeItem();
*/