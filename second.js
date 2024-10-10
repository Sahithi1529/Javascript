let taskNo = 0;
let mainTable = document.getElementById("main-table");

const updateStatus = (id)=>{
    let rowUpdate = document.getElementById(id);
    let updateStatus = rowUpdate.children[3] ;
    rowUpdate.children[2].innerText = "completed";
    let button = updateStatus.children[0];
    button.disabled=true;
 };

 let addTaskButton = document.getElementById("add-task-button");
 const addTask = () =>{
    let taskName = prompt("Enter task Name");
    taskNo++;
    let htmlText = `<tr class="data-rows" id="task-${taskNo}">
            <td>${taskNo}</td>
            <td>${taskName}</td>
            <td>Pending</td>
            <td ><button class="status" id=${taskNo} onclick="updateStatus('task-${taskNo}')">Completed</button></td>
        </tr>`
    mainTable.innerHTML = mainTable.innerHTML+htmlText;    
   
 };


 let editTaskButton = document.getElementById("edit-task-button");
 const editTask = () =>{
     let editTaskNo = prompt("Enter task no need to be edited");
     let taskUpdate = document.getElementById(`task-${editTaskNo}`);
     let editedTask = prompt("Enter task name to edit:");
     taskUpdate.children[1].innerText=`${editedTask}`;
     taskUpdate.children[2].innerText = "pending";
     let button = taskUpdate.children[3];
     let btn = button.children[0];
     btn.disabled=false;
     




 }