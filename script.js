const tasksContainer = document.getElementById("task-container");
const taskForm = document.getElementById("task-form");

let tasks = [];
let taskIdCounter = 1;

var displayTasks = () => {
  tasksContainer.innerHTML = "";
  tasks.forEach((task) => {
    const newTask = createnewTask(task);
    tasksContainer.appendChild(newTask);
    newTask.classList.add("taskElement");
  });
};

// to create new task
var createnewTask = (task) => {
  const newTask = document.createElement("div");
  newTask.className = "task";
  newTask.innerHTML = `
        <h4>Title : ${task.title}</h4>
        <p>Description : ${task.description}</p>
        <p>Status : ${task.status}</p>
        <p>Task Id : ${task.id}</p>
        <button class="complete" onclick="taskComplete('${task.id}')">Mark as Complete</button>
        <button class="delete" onclick="deleteTask('${task.id}')">Delete</button>
    `;
  return newTask;
};

// to add task
var addTask = (title, description) => {
  const newTask = {
    id: generateTaskId(),
    title,
    description,
    status: "Incomplete",
  };
  tasks.push(newTask);
  displayTasks();
  clearForm();
};

// to delete task
var deleteTask = (taskId) => {
  tasks = tasks.filter((task) => task.id !== taskId);
  displayTasks();
};

// status
var taskComplete = (taskId) => {
  tasks = tasks.map((task) => {
    if (task.id === taskId) {
      task.status = task.status === "Incomplete" ? "Complete" : "Incomplete";
    }
    return task;
  });
  displayTasks();
};

// to generate unique id
var generateTaskId = () => {
  return `${taskIdCounter++}`;
};

// to clear tasks
var clearForm = () => {
  taskForm.reset();
};

// validation
taskForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  if (title && description) {
    addTask(title, description);
  } else {
    alert("Please fill in both title and description.");
  }
});

window.onload = displayTasks;
