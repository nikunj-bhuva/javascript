// debugger;
let input = document.querySelector("input");
let addBtn = document.querySelector(".addBtn");
let taskList = document.querySelector(".tasklist");
let emptyMsg = document.querySelector(".empty-msg");
let userInputValue;

// function to add todo tasks //

// get tasks from localstorage //

let getTasks = [];
console.log(getTasks);
console.log(JSON.parse(localStorage.getItem("todoTasks")));
const addTodoTasks = () => {
  console.log(getTasks);
  // debugger;
  userInputValue = input.value.trim();
  if (userInputValue === "") {
    emptyMsg.textContent = "please enter your Task!";
  } else if (userInputValue.length < 4) {
    emptyMsg.textContent = "maximum 4 characters must be Include!";
  } else {
    let li = document.createElement("li");
    li.className = "todo-list";
    li.innerHTML = `<span>${userInputValue}</span><button class="delete-btn">Delete</button>`;
    taskList.append(li);
    console.log(getTasks.push(userInputValue));
    console.log(getTasks);
    localStorage.setItem("todoTasks", JSON.stringify(getTasks));
    input.value = "";
    emptyMsg.innerText = "";
  }
};

addBtn.addEventListener("click", addTodoTasks);
