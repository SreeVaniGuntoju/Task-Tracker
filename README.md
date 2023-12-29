# Task-Tracker
Simple Task Tracker Application

• The application should allow the user to add, delete, mark tasks as completed or not and view list of tasks. 

• Each task contains title, description, status and task id.

Steps to follow to use application:

Add : To add new task, enter title and description and click on "Add Task" button 

-> addTask(title,description) method will add new task

Delete : To delete a specific task ,click on "Delete" button on specified task 

-> deleteTask(task) method will delete task

Status : To mark status as complete, click on complete button(by default it shows as “not complete”) 

-> taskComplete(taskId) method will mark status as complete

Display new task: 

-> createnewTask(task) method will display new task

validation: To prevent from default submission, alert for input to enter. 

Note : Every task has its own unique id that helps to display the tasks in sequence and helps to delete task from the list of tasks
