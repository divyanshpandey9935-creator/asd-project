const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const deleteSelectedBtn = document.getElementById("deleteSelectedBtn");


function updateDeleteButtonVisibility() {
 const anyChecked = document.querySelectorAll("#taskList input[type='checkbox']:checked").length > 0;
 deleteSelectedBtn.style.display = anyChecked ? "block" : "none";
}


addBtn.addEventListener("click", addTask);

function addTask() {
 const taskText = taskInput.value.trim();
 if (taskText === "") return;

 const li = document.createElement("li");
 li.className = "task-item";

 const taskId = "task-" + Date.now();

 const checkbox = document.createElement("input");
 checkbox.type = "checkbox";
 checkbox.id = taskId;

 checkbox.addEventListener("change", updateDeleteButtonVisibility);

 const label = document.createElement("label");
 label.setAttribute("for", taskId);
 label.className = "task-label";  
 label.textContent = taskText;

 const deleteIcon = document.createElement("span");
  deleteIcon.innerHTML = "<img src='delete bin.jpg' width='22' class='delImg'>";

 deleteIcon.addEventListener("click", () => {
 if (checkbox.checked) {
 li.remove();
 updateDeleteButtonVisibility(); // update button after delete
 } else {
 alert("Please tick the checkbox before deleting.");
 }
  });
  li.appendChild(checkbox);
  li.appendChild(label);
  li.appendChild(deleteIcon);

  taskList.appendChild(li);
  taskInput.value = "";
}

deleteSelectedBtn.addEventListener("click", () => {
  const checkedItems = document.querySelectorAll("#taskList input[type='checkbox']:checked");
  checkedItems.forEach(item => item.parentElement.remove());
  updateDeleteButtonVisibility(); // hide button if no checkbox checked
});
