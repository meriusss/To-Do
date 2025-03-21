const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

function updateDomDate(){
    domDate = document.getElementById("date");
    domDate.innerHTML = `${day}/${month}/${year}`
}

function generateTask(name, description, dueDate, priority){
    domTasks = document.getElementsByClassName("tasks");
    taskDiv = document.createElement("div");
    taskDiv.className = "task";
    
}

updateDomDate();
generateTask();