const inputTask = document.getElementById("input-task");
const listContainer = document.getElementById("list-container");
function addTask() {
  if (inputTask.value === "") {
    alert("Please enter task");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputTask.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7"; //cross icon
    li.appendChild(span);
  }
  inputTask.value = "";
  saveData();
}

listContainer.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

//save data in browser local storage
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showToDo() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showToDo();
