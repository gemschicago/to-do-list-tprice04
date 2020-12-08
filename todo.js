window.onload= function(){

var addButton=document.getElementById("add");
addButton.addEventListener("click", addTask);
var tasks = [];

function addTask(){
var task = document.getElementById ("textfield").value;
if (task.length > 0) {
tasks.push(task);
var addTask = document.getElementById("todolist");
addTask.insertAdjacentHTML("beforeend", "<li> "+ task + "</li>");
    }
}

}


function addTask(){
	var label = document.getElementById ("textfield")
	var task = document.getElementById ("textfield").text;
	tasks.push(task);
	displayTasks();
	console.log (task)


}




}